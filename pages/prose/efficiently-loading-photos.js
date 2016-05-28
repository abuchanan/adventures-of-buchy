import React from 'react';
import { Head, Prose, YouTube } from '../../common/components';

export default props => <Prose
  title="Efficiently Loading Photos"
  postDate="May 14th, 2016"
  description="I wrote a photo viewer component for this website and along the way I learned a thing or two about efficiently loading photos."
>

<p>
Photos are large files and those can take a few seconds to load on a website. That creates a sluggish user experience; you press the "next" button and the screen goes black while the image slowly loads. The goal is to smooth over this rough experience so the user doesn't notice the lag as much, even on mobile networks where download speeds are slow.
</p>


<h2>Resize</h2>

<p>
The first step is to get the photos to a reasonable size. The original version of the photo below weighs in at <strong>6MB</strong> at full size and 100% quality. <strong>6MB!</strong> That would take <em>foooorrreeevvverrrr</em> to load. I resize photos to fit within 1000x1000 and use 80% quality, which brings the size down to <strong>154KB</strong>, already a massive improvement.
</p>

<p className="centered-image">
  <img src="/photos/melbourne-feb-2016/full/025.jpg" />
</p>


<h2>Strip metadata</h2>

<p>
Photos often contain all sorts of metadata: the camera and lens used, the location of the photo, the exposure settings, the photographer, etc. This can take up lots of space. Stripping that out brings the size down to <strong>123KB</strong>.
</p>

<pre><code>
$ jpegtran -copy none -outfile meta-stripped.jpg resized-80-quality.jpg
</code></pre>


<h2>Progressive JPEGs</h2>

<p>
During this process, I learned about progressive JPEGs, which are really cool. Check out this comparison video:
</p>

<YouTube code="TOc15-2apY0" />

<p>
Notice how the baseline version loads from top to bottom sequentially while the progressive version loads from blurry to clear. The data in a progressive JPEG is organized differently which allows the browser to quickly show a blurry version of the image that gets progressively clearer as it's loaded. For whatever reason, this feels like a much better user experience to me. It even makes the file slightly smaller, so my test image is now at <strong>120KB</strong>.
</p>


<h2>Thumbnail placeholder</h2>
<p>
Progressive JPEGs are great but there's still an unpleasant delay after clicking the "next" button. The browser still needs to load roughly 25% of the image (~30KB) before it can render the blurry version, and that takes a significant amount of time, especially on slow mobile networks.
</p>

<p>
My solution is to load a very lightweight thumbnail as a placeholder. The thumbnail images only weigh 1-2KB, less than most other resources on a website, so they load very quickly. Using the support for multiple background images in CSS3, this is stupid easy to implement:
</p>

<pre><code>{`.viewer {
  background-image: url(thumbnail.jpg), url(photo.jpg);
}`}</code></pre>

<p>
I use imagemagick to generate small, lightweight thumbnails with some extra blur applied:
</p>

<pre><code>
$ convert photo.jpg -quality 65 -thumbnail x64 -strip  -gaussian-blur 0.5 thumb.jpg
</code></pre>


<h2>Prefetch</h2>

<p>
The finishing touch (so far) is to prefetch the next thumbnail before the user even clicks the "next" button. If all goes well the user sees a blurry version of the next photo immediately when clicking "next", which creates the most important user experience: responsiveness.
</p>



<h2>To the future</h2>

<p>
In the end, honestly the browser vendors did most of the work here. Support for progressive JPEGs and multiple background images in CSS3 is huge and saved me a ton of work implementing this (literally one line each). Without these, my code would be much more complex.
</p>

<p>
I still have room for improvement. I should probably have more aggressive prefetching. I only prefetch the next photo, so if the user stays on one photo for 20-30 seconds, I'm missing a lot of opportunity to do more loading. I don't prefetch backwards, i.e. I don't handle the case where the user is clicking "previous" instead of "next". I also want to find a nice way to make the metadata available. And I need titles and captions and zoom and download and so many other things, but I'm pretty happy with version 1.
</p>

<p>
If you made it this far, thanks for reading! Let me know what you think.
</p>

</Prose>;
