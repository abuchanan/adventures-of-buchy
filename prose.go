package main

type Prose struct {
  Title,
  Date,
  Description,
  Name string
}

var Proses = []Prose{
  {
    Title: `Building This Website: React, Webpack, and Amazon`,
    Date: `May 28th, 2016`,
    Description: `Here's a little bit about how this website is built.`,
    Name: "building-this-website",
  },
  {
    Title: "Efficiently Loading Photos",
    Date: "May 14th, 2016",
    Description: "I wrote a photo viewer component for this website and along the way I learned a thing or two about efficiently loading photos.",
    Name: "efficiently-loading-photos",
  },
  {
    Title: "Improved prefetching for the photo viewer",
    Date: "June 5th, 2016",
    Description: "In which I discover, yet again, that the browser vendors have been hard at work building cool shit that makes my work surprisingly easy.",
    Name: "improved-prefetching",
  },
  {
    Title: "Is photography the ends or the means?",
    Date: "March 30th, 2016",
    Description: "After an enthusiastic start to photography over the last couple months, I’ve started to consider  what photography means to me and to others.",
    Name: "photography-ends-or-means",
  },
}
