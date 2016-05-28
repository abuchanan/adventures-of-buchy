http://henleyedition.com/implicit-code-splitting-with-react-router-and-webpack/
https://medium.com/@matt.krick/a-production-ready-realtime-saas-with-webpack-7b11ba2fa5b0#.sbk8sckau
https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.nmduottmz

Here's a little bit about how this website is built.

1. It's static

By static I mean it's not backed by a server-side application or a database, just HTML, Javascript, CSS, and images. This makes it easier and cheaper to host.

2. It's mostly React + JSX

I'm on the React bandwagon lately, writing it both at work and at home (so basically day and night, every day of the week).

What's React? It's a library for building user interfaces; think Angular directives or Knockout components. I find that it strikes a great balance:

- I can write simple, declarative HTML easily
- I can invent new components to keep things simple e.g. the <Program /> component on my "Code" page
- When I need more power and control, I'm already in Javascript land
- I don't need Markdown/Jinja/YAML/etc. because JS + JSX covers nearly everything I need

3. It's pre-rendered server-side

Uh, wat? What's that Jargony McJargonface? Basically I wanted those nice automatic previews when sharing a post on Facebook.

[insert image]

The first version of this site required your browser to load and run Javascript in order to render the page content. But, Facebook's page scraper doesn't run Javascript, so it couldn't access the information needed to generate the preview automatically.

<!doctype html>
<html>
<head>
  <meta charset="utf-8">

  <title>Bali @ The Adventures of Buchy</title>
  <meta property="og:type" content="article"/>
  <meta property="og:title" content="Bali"/>
  <meta property="og:description" content="Photos from a trip to Bali."/>
  <meta property="og:image" content="http://adventures-of-buchy.xyz/photos/bali/full/012.jpg"/>

The solution was server-side rendering. Using React and React-Router, it's easy to generate the HTML for a given page. I upload that HTML to the server so that pages still work without Javascript. This allows Facebook and Google to easily find the information they need.

This also allows the site load a bit faster. Instead of waiting for 100-200KB of Javascript to load, you get useful content after the first 5KB. Then, once your browser loads all the Javascript dependencies, React attaches itself to the existing DOM and adds in all the nice dynamic functionality, such as my photo viewer. My site is small and light anyway, so loading quickly isn't a big issue, but every little bit helps those slow mobile networks that people live on today.

What's amazing to me is how easy React and React-Router make this. I basically figured all this out and had it working in two days, my existing code barely changed, and the same code is used for rendering both server-side and client-side. Impressive!

4. It's using webpack for code splitting

This is about preparing for the future, when I have lots of content on the site.

    It's actually more likely that I get distracted by numerous other side projects and never actually create content for this site, but that won't stop me nerding out on performance improvements now!

The first version of this site was one big bundle – when you visted the first page, you got all the pages. Some day when I have dozens of posts and albums, that bundle will be too big, so I wanted to find a way to split it up into more logical pieces.

Webpack came to the rescue with its code splitting plugins, CommonsChunkPlugin and AggressiveMergingPlugin. These plugins analyze your code and split it into smaller chunks. I wrote some custom code to combine this with my server-side rendering, and now my pages should load only the code they need. Of course, since the site is so small, the splits aren't that useful, but the foundation is there and can be tweaked as the site grows.

One hurdle was configuring React Router to expect async pages. When you split up the code, doing a module import becomes asynchoronous, and since React Router depends on those modules, you have to tell it to expect them to be asynchronous. But then, you also have to handle the server-side environment, where everything is synchronous.

Luckily, someone else had mostly solved that problem for me (again). Evan Henley of Henly Edition has a great post on this topic:
http://henleyedition.com/implicit-code-splitting-with-react-router-and-webpack/

4a. It adds fingerprints to bundled files

Fingerprinting, file hashing, cache busting, whatever you call it, it's necessary for caching. I didn't think I'd spend hours and hours figuring out how to do it in Webpack though.

It's easy at first, just add "[chunkhash]" to the file name, right? Wrong.

Without getting into details, the critical point is that you should use the NamedModulesPlugin so that your bundles get the correct hashes. Without it, bundles might get a different hash, even if the code doesn't change.

Details here: https://github.com/webpack/webpack/issues/1315


5. It's hosted on Amazon S3 + Cloudflare

You can serve static websites from S3 for a decent price. Cloudflare gives you a CDN and gzip for efficiency.

I actually find the AWS web interfaces kinda difficult to work with, but they have good documentation, so oh well.


6. It's amazingly easy

This site is:

- written mostly in Javascript and HTML
- dynamic and single-pagey (all the cool kids are doing it)
- pre-rendered and SEO friendly
- served efficiently from a CDN

I'm not sure, but I feel like that would have been really difficult/expensive five years ago. It's amazing what's possible with a couple weeks of hacking away in the evenings.

This site is standing on the shoulders of giants:
- Facebook has produced React, a fantastic approach to UI components with powerful features.
- Amazon basically puts any infrastruture I want at my fingertips for a low price.
- Babel gives me all the new hotness being imagined for JS.
- Webpack efficiently bundles my code.
- React Router handles the tough parts of a single page app.
- A massive community of developers answers almost every question I have, before I have it.

Those are all seriously big, complex projects, and most are shared openly and freely with the world. The software world can be really cool sometimes.
