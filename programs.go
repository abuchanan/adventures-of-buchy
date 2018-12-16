package main

var ProgramIcons = map[string]string{
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
}

type Program struct {
  Href,
  Title,
  Preview,
  ExtraClass,
  Description,
  Demo,
  Technologies string
}

var Programs = []Program{
  {
    Href: "https://github.com/abuchanan/tree",
    Title: "tree",
    Preview: "tree.png",
    Description: "Programmatically drawing a tree (the leafy green kind).",
    //Demo: "/demo/tree/",
    Technologies: "Javascript, Three.js",
},

  {
    Href: "https://github.com/abuchanan/kindlespark",
    Title: "kindlespark",
        Preview: "kindlespark.png",
    Description: "Utility for generating Kindle ebooks from SparkNotes webpages.",
    Technologies: "Go",
},

  {
    Href: "https://github.com/abuchanan/react-mapbox-location-search",
    Title: "Location Search UI Component",
    Preview: "location-search.png",
    //Demo: "/demo/location-search/",
    Description: "Location search bar, backed by Mapbox's geocode API, implemented as a React component.",
    Technologies: "Javascript, React, Mapbox",
},

  {
    Href: "https://github.com/abuchanan/mapbox-frame-rendering",
    Title: "Mapbox Frame Rendering",
    Preview: "mapbox-frame-rendering.png",
    Description: "App for rendering frames of an animated map built on Mapbox and Electron",
    Technologies: "Javascript, Electron, Mapbox",
},

  {
    Href: "https://github.com/abuchanan/melbourne-ptv-map",
    Title: "Melbourne Transit Map",
    Preview: "melbourne-transit-map.png",
    Description: "Interactive map for exploring public transit routes in Melbourne.",
    Technologies: "Javascript, Angular, Mapbox",
},

  {
    Href: "https://github.com/abuchanan/miter",
    Title: "miter",
    Preview: "miter.png",
    ExtraClass: "miter",
    Description: "Ideas for a new programming language.",
},

  {
    Href: "https://github.com/abuchanan/cue",
    Title: "cue",
    Preview: "cue.png",
    Description: "Experimenting with converting R to Python",
},

  {
    Href: "https://github.com/abuchanan/biscuits",
    Title: "biscuits",
    Preview: "biscuits.png",
    Description: "2D, top-down RPG game engine.",
    Technologies: "Python",
},

  {
    Href: "https://github.com/abuchanan/dempsy",
    Title: "dempsy",
    Preview: "dempsy.png",
    Description: "Multiplayer crossword game web application.",
    Technologies: "Javascript, Angular, Socket.io, MongoDB",
},

  {
    Href: "https://github.com/abuchanan/gew",
    Title: "gew",
    Preview: "gew.png",
    Description: "Toy simulation of grass, elk, and wolves.",
    Technologies: "Javascript",
},

  {
    Href: "https://github.com/abuchanan/gobblet",
    Title: "gobblet",
    Preview: "gobblet.png",
    Description: "Simulated players for the Gobblet strategy game.",
    Technologies: "Python",
},

  {
    Href: "https://github.com/abuchanan/word-crosser",
    Title: "word-crosser",
    Preview: "word-crosser.png",
    Description: "Crossword puzzle generator.",
    Technologies: "Python",
},

  {
    Href: "https://github.com/abuchanan/benson",
    Title: "benson",
    Preview: "benson.png",
    Description: "My first, very simple, single level game made with Unity3d.",
    Technologies: "Unity3d",
},

  {
    Href: "https://github.com/abuchanan/taj",
    Title: "taj",
    Preview: "taj.png",
    Description: "Toy simulation of battling clans of castles, soldiers, etc.",
    Technologies: "Python, Javascript",
},

  {
    Href: "https://github.com/abuchanan/alfred",
    Title: "alfred",
    Preview: "alfred.png",
    Description: "Programmed stick figure animation and inverse kinematics.",
    Technologies: "Javascript",
},

  {
    Href: "https://github.com/abuchanan/gff",
    Title: "gff",
    Preview: "gff.png",
    Description: "A parser for GFF3-formatted files.",
},

  {
    Href: "https://github.com/abuchanan/annotation",
    Title: "annotation",
    Preview: "annotation.png",
    Description: "Genome annotation models",
},

  {
    Href: "https://github.com/abuchanan/interval",
    Title: "interval",
    Preview: "interval.png",
    Description: "A small utility class for representing intervals.",
},

  {
    Href: "https://github.com/abuchanan/fastq",
    Title: "fastq",
    Description: "FASTQ file reader.",
},

  {
    Href: "https://github.com/abuchanan/fasta",
    Title: "fasta",
    Description: "FASTA file reader.",
},

  {
    Href: "https://github.com/abuchanan/jeans",
    Title: "jeans",
    Description: "Gene/transcript expression analysis.",
},

  {
    Href: "https://github.com/abuchanan/chunk_writer",
    Title: "chunk_writer",
    Description: "Utility splitting lots of records in to smaller chunks.",
},

  {
      Href: "https://github.com/abuchanan/sequence_utils",
      Title: "sequence_utils",
      Description: "Tools for working with genome sequences",
},

  {
      Href: "https://github.com/abuchanan/coverage",
      Title: "coverage",
      Description: "Tools for working with genome coverage data.",
},

  {
      Href: "https://github.com/abuchanan/fastq_to_fasta",
      Title: "fastq_to_fasta",
},

  {
      Href: "https://github.com/abuchanan/go_data",
      Title: "go_data",
},

  {
      Href: "https://github.com/abuchanan/sparkgene",
      Title: "sparkgene",
      Description: "Draw gene models in HTML Canvas",
},

  {
      Href: "https://github.com/abuchanan/chet",
      Title: "chet",
      Description: "Genome browser",
},

  {
    Href: "https://github.com/abuchanan/stats",
    Title: "stats",
    Description: "Statistics utility for one-pass, parallel calculation of variance.",
    Technologies: "Python",
},

  { Href: "https://github.com/abuchanan/bolts",
Title: "bolts",
    Description: "Nuts and bolts. Small recipes I've found occasionally useful.",
    Technologies: "Python",
},

  { Href: "https://github.com/abuchanan/image-bolts",
Title: "image-bolts",
    Description: "Nuts and bolts for processing images",
},

  { Href: "https://github.com/abuchanan/mesita",
Title: "mesita",
    Description: "Simple, stupid utility for working with tabular data.",
    Technologies: "Python",
},

  { Href: "https://github.com/abuchanan/optional_formatter",
Title: "optional_formatter",
    Description: "Python utility for optional string template placeholders",
},

  { Href: "https://github.com/abuchanan/recycle",
Title: "recycle",
    Description: "Experimenting with reusable iterators in Python.",
},

  { Href: "https://github.com/abuchanan/bev",
Title: "bev",
    Description: "An experimental utility for recording CLI history",
},

  { Href: "https://github.com/abuchanan/beehive",
Title: "beehive",
    Description: "An experiment in using ZeroMQ and writing a service-oriented, request-reply (i.e. client-worker) broker/framework/thingy.",
},

  {
    Href: "https://github.com/abuchanan/GoogleTV-App",
    Title: "Conduit",
    Description: "GoogleTV Android app for discovering and browsing networked media.",
},
}
