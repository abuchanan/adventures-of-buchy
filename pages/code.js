import React from 'react';
import { Head } from '../common/components';

const icons = {
  "angular": "/icons/angular.png",
  "go": "/icons/golang.png",
  "android": "/icons/google_android.png",
  "javascript": "/icons/javascript.png",
  "mapbox": "/icons/mapbox.png",
  "react": "/icons/react.png",
  "unity3d": "/icons/unity.png",
  "mongodb": "/icons/mongodb.png",
  "python": "/icons/python.png",
  "socket.io": "/icons/socketio.gif",
  "electron": "/icons/electron.png",
};

const Program = props => {
  const tech = props.technologies ? props.technologies.split(", ") : [];
  const extraClass = props.extraClass || "";

  return (
    <div className={"code-project " + extraClass}>
      <h2>{ props.title }</h2>
      <div className="preview"
        style={{ backgroundImage: `url(/code-project-mocks/${props.preview})` }}>
      </div>

      <div className="description">
        <div className="text-content">{ props.description }</div>
        <div className="buttons">
          { props.demo ? <a className="demo-link" href={props.demo}>Demo</a> : null }
          <a className="code-link" href={props.href}>View code</a>
        </div>
      </div>
    </div>
  );
};

export default props => <main id="code-page">

  <Head
    title="Code"
  />

  <Program
    href="https://github.com/abuchanan/react-mapbox-location-search"
    title="Location Search UI Component"
    preview="location-search.png"
    demo="/demo/location-search/"
    description="Location search bar, backed by Mapbox's geocode API, implemented as a React component."
    technologies="Javascript, React, Mapbox" />

  <Program
    href="https://github.com/abuchanan/mapbox-frame-rendering"
    title="Mapbox Frame Rendering"
    preview="mapbox-frame-rendering.png"
    description="App for rendering frames of an animated map built on Mapbox and Electron"
    technologies="Javascript, Electron, Mapbox" />

  <Program
    href="https://github.com/abuchanan/melbourne-ptv-map"
    title="Melbourne Transit Map"
    preview="melbourne-transit-map.png"
    description="Interactive map for exploring public transit routes in Melbourne."
    technologies="Javascript, Angular, Mapbox" />

  <Program
    href="https://github.com/abuchanan/miter"
    title="miter"
    preview="miter.png"
    extraClass="miter"
    description="Ideas for a new programming language." />

  <Program
    href="https://github.com/abuchanan/cue"
    title="cue"
    preview="cue.png"
    description="Experimenting with converting R to Python" />

  <Program
    href="https://github.com/abuchanan/biscuits"
    title="biscuits"
    preview="biscuits.png"
    description="2D, top-down RPG game engine."
    technologies="Python" />

  <Program
    href="https://github.com/abuchanan/dempsy"
    title="dempsy"
    preview="dempsy.png"
    description="Multiplayer crossword game web application."
    technologies="Javascript, Angular, Socket.io, MongoDB" />

  <Program
    href="https://github.com/abuchanan/gew"
    title="gew"
    preview="gew.png"
    description="Toy simulation of grass, elk, and wolves."
    technologies="Javascript" />

  <Program
    href="https://github.com/abuchanan/gobblet"
    title="gobblet"
    preview="gobblet.png"
    description="Simulated players for the Gobblet strategy game."
    technologies="Python" />

  <Program
    href="https://github.com/abuchanan/word-crosser"
    title="word-crosser"
    preview="coming-soon.png"
    description="Crossword puzzle generator."
    technologies="Python" />

  <Program
    href="https://github.com/abuchanan/benson"
    title="benson"
    preview="coming-soon.png"
    description="My first, very simple, single level game made with Unity3d."
    technologies="Unity3d" />

  <Program
    href="https://github.com/abuchanan/taj"
    title="taj"
    preview="coming-soon.png"
    description="Toy simulation of battling clans of castles, soldiers, etc."
    technologies="Python, Javascript" />

  <Program
    href="https://github.com/abuchanan/tree"
    title="tree"
    preview="coming-soon.png"
    description="Programmatically drawing a tree (the leafy green kind)."
    technologies="Javascript, Three.js" />

  <Program
    href="https://github.com/abuchanan/alfred"
    title="alfred"
    preview="coming-soon.png"
    description="Programmed stick figure animation and inverse kinematics."
    technologies="Javascript" />

  <Program
      href="https://github.com/abuchanan/gff"
      title="gff"
    preview="coming-soon.png"
      description="A parser for GFF3-formatted files." />

  <Program
      href="https://github.com/abuchanan/annotation"
      title="annotation"
          preview="coming-soon.png"
      description="Genome annotation models" />

  <Program
      href="https://github.com/abuchanan/interval"
      title="interval"
          preview="coming-soon.png"
      description="A small utility class for representing intervals." />

  <Program
      href="https://github.com/abuchanan/fastq"
      title="fastq"
          preview="coming-soon.png"
      description="FASTQ file reader." />

  <Program
      href="https://github.com/abuchanan/jeans"
      title="jeans"
          preview="coming-soon.png"
      description="Gene/transcript expression analysis." />

  <Program
      href="https://github.com/abuchanan/fasta"
      title="fasta"
          preview="coming-soon.png"
      description="FASTA file reader." />

  <Program
      href="https://github.com/abuchanan/chunk_writer"
      title="chunk_writer"
          preview="coming-soon.png"
      description="Utility splitting lots of records in to smaller chunks." />

  <Program
      href="https://github.com/abuchanan/sequence_utils"
      title="sequence_utils"
          preview="coming-soon.png"
      description="Tools for working with genome sequences" />

  <Program
      href="https://github.com/abuchanan/coverage"
      title="coverage"
          preview="coming-soon.png"
      description="Tools for working with genome coverage data." />

  <Program
      href="https://github.com/abuchanan/fastq_to_fasta"
          preview="coming-soon.png"
      title="fastq_to_fasta" />

  <Program
      href="https://github.com/abuchanan/go_data"
          preview="coming-soon.png"
      title="go_data" />

  <Program
      href="https://github.com/abuchanan/sparkgene"
      title="sparkgene"
          preview="coming-soon.png"
      description="Draw gene models in HTML Canvas" />

  <Program
      href="https://github.com/abuchanan/chet"
          preview="coming-soon.png"
      title="chet"
      description="Genome browser" />

  <Program
    href="https://github.com/abuchanan/stats"
    title="stats"
        preview="coming-soon.png"
    description="Statistics utility for one-pass, parallel calculation of variance."
    technologies="Python" />

  <Program
    href="https://github.com/abuchanan/kindlespark"
    title="kindlespark"
        preview="coming-soon.png"
    description="Utility for generating Kindle ebooks from SparkNotes webpages."
    technologies="Go" />

  <Program href="https://github.com/abuchanan/bolts" title="bolts"
      preview="coming-soon.png"
    description="Nuts and bolts. Small recipes I've found occasionally useful."
    technologies="Python" />

  <Program href="https://github.com/abuchanan/image-bolts" title="image-bolts"
      preview="coming-soon.png"
    description="Nuts and bolts for processing images" />

  <Program href="https://github.com/abuchanan/mesita" title="mesita"
      preview="coming-soon.png"
    description="Simple, stupid utility for working with tabular data."
    technologies="Python" />

  <Program href="https://github.com/abuchanan/optional_formatter" title="optional_formatter"
      preview="coming-soon.png"
    description="Python utility for optional string template placeholders" />

  <Program href="https://github.com/abuchanan/recycle" title="recycle"
      preview="coming-soon.png"
    description="Experimenting with reusable iterators in Python." />

  <Program href="https://github.com/abuchanan/bev" title="bev"
      preview="coming-soon.png"
    description="An experimental utility for recording CLI history" />

  <Program href="https://github.com/abuchanan/beehive" title="beehive"
      preview="coming-soon.png"
    description="An experiment in using ZeroMQ and writing a service-oriented, request-reply (i.e. client-worker) broker/framework/thingy." />

  <Program
    href="https://github.com/abuchanan/GoogleTV-App"
    title="Conduit"
        preview="coming-soon.png"
    description="GoogleTV Android app for discovering and browsing networked media." />
</main>;
