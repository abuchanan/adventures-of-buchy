import React from 'react';

export default props => (<main id="latest-page">

  <div className="card">
    <h2>Efficiently Loading Photos</h2>
    <p>I wrote a photo viewer component for this website and along the way I learned a thing or two about efficiently loading photos.</p>
    <p><a href="/prose/efficiently-loading-photos/">Read more</a></p>
    <p className="post-date">Sat May 14th, 2016</p>
  </div>

  <div className="card">
    <h2>Kindlespark 2</h2>
    <p>I updated <a href="https://github.com/abuchanan/kindlespark">kindlespark</a> to version 2.0.</p>
    <p>I did a complete rewrite in Go (previously Python + Scrapy). This resulted in much, much simpler
      code. Scrapy is just too complicated. A nice benefit of Go is that now I can easily compile binaries across multiple platforms,
      which should make the project easier to use.
    </p>
    <p className="post-date">Sunday May 8th, 2016</p>
  </div>
  <div className="card">
    <h2>New Website</h2>
    <p>I've written a new version of my website (yet again). It's still very much a work in progress, especially this home page news feed.</p>
    <p>This incarnation is written mostly in Javascript + React. There are still some kinks to work out, but generally I like this approach more than anything I've tried before (static site generators, Django, Couch, you name it). Hopefully this one sticks.</p>
    <p>Hosting is via Amazon s3, which seems nice so far. We'll see what the bill looks like at the end of the year.</p>
    <p className="post-date">Sunday May 8th, 2016</p>
  </div>

</main>);
