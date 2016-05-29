import React from 'react';

// TODO figure out how to incrementally load posts
const ProsePage = props => <main id="prose-page">
  {/* props.posts.map(post => <post.component key={ post.id } />) */}

  <div className="card">
    <h2>Building This Website: React, Webpack, Amazon</h2>
    <p>Here's a little bit about how this website is built.</p>
    <p><a href="/prose/building-this-website/">Read more</a></p>
    <div className="post-date">May 28th, 2016</div>
  </div>

  <div className="card">
    <h2>Efficiently Loading Photos</h2>
    <p>I wrote a photo viewer component for this website and along the way I learned a thing or two about efficiently loading photos.</p>
    <p><a href="/prose/efficiently-loading-photos/">Read more</a></p>
    <div className="post-date">May 14th, 2016</div>
  </div>

  <div className="card">
    <h2>Is photography the ends or the means?</h2>
    <p>After an enthusiastic start to photography over the last couple months, I’ve started to consider  what photography means to me and to others.</p>
    <p><a href="/prose/photography-ends-or-means/">Read more</a></p>
    <div className="post-date">March 30th, 2016</div>
  </div>

</main>;

export default ProsePage;
