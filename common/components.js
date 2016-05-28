import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';

const Prose = props => <article className="prose">
<Head
  title={props.title}
  meta={[
    {property: "og:type", content: "article"},
    {property: "og:title", content: props.title},
    {property: "og:description", content: props.description,},
  ]}
/>

<div className="header-wrapper">
  <header>
    <h1>{props.title}</h1>
    <aside className="post-date">{props.postDate}</aside>
  </header>
</div>

<div className="description-wrapper">
  <aside className="description">{props.description}</aside>
</div>

<div className="content-wrapper">
  <div className="content">
  { props.children }
  </div>
</div>
</article>;

const YouTube = props => <div className="youtube">
  <iframe
    src={ `https://www.youtube-nocookie.com/embed/${ props.code }` }
    frameBorder="0"
    allowFullScreen></iframe>
  </div>;

const Page = props => <div className="page">
  <Head />
  <Header />
  <div id="content-container">
  { props.children }
  </div>
</div>;

const Head = props => <Helmet {...props}
  htmlAttributes={{"lang": "en"}}
  titleTemplate="%s @ The Adventures of Buchy"
  defaultTitle="The Adventures of Buchy"
/>;

export { Head, Page, Prose, YouTube };
