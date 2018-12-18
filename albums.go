package main

import (
  "encoding/json"
  "fmt"
  "log"
  "path/filepath"
  "io/ioutil"
)

var Art = []*Album{
  {
    ID: `generated-2018`,
    Title: "Generated Art in 2018",
  },
  {
    ID: `2015`,
    Title: "Art in 2015",
  },
  {
    ID: `2014`,
    Title: "Art in 2014",
  },
}

var Photos = []*Album{
  {
    ID: `etcetera`,
    Title: `Etcetera`,
    Description: `Catching up with the last two years.`,
    Teaser: `etcetera/009.jpg`,
  },
  {
    ID: `life-in-august`,
    Title: `Life in August`,
    Description: `Ah, the great outdoors.`,
    Teaser: `life-in-august/021.jpg`,
  },
  {
    ID: `nehalem-bay-birds`,
    Title: `Nehalem Bay Birds`,
    Description: `Herons, geese, and friends.`,
    Teaser: `nehalem-bay-birds/003.jpg`,
  },
  {
    ID: `backyard-animals`,
    Title: `Backyard Animals`,
    Description: `Animals around the house and yard.`,
    Teaser: "backyard-animals/005.jpg",
  },
  {
    ID: `backyard-droplets`,
    Title: `Backyard Droplets`,
    Description: `The morning after a rain leaves lots of droplets on the plants.`,
    Teaser: "backyard-droplets/005.jpg",
  },
  {
    ID: `backyard-flowers`,
    Title: `Backyard Flowers`,
    Description: `Flowers in the backyard at home.`,
    Teaser: "backyard-flowers/005.jpg",
  },
  {
    ID: `the-fourth`,
    Title: `The Fourth`,
    Description: `First weekend back home after two years, seeing family and friends.`,
    Teaser: "the-fourth/005.jpg",
  },
  {
    ID: `cathedrals-are-cool`,
    Title: `Cathedrals are cool`,
    Description: `A day spent being a tourist in Melbourne.`,
    Teaser: "cathedrals-are-cool/005.jpg",
  },
  {
    ID: `a-day-at-the-zoo`,
    Title: `A Day at the Zoo`,
    Description: `Taking the new zoom lens for a walk to the Melbourne Zoo`,
    Teaser: "a-day-at-the-zoo/036.jpg",
  },
  {
    ID: `may-days-in-melbourne`,
    Title: `May Days in Melbourne`,
    Description: `Strolling the streets of Melbourne`,
    Teaser: "may-days-in-melbourne/018.jpg",
  },
  {
    ID: `healesville`,
    Title: `Healesville`,
    Description: "A trip to the Healesville animal sanctuary, complete with emu, kangaroo, koala, pelicans, and spectacular birds of prey",
    Teaser: "healesville/021.jpg",
  },
  {
    ID: `broken-train`,
    Title: `Broken Train`,
  },
  {
    ID: `bali`,
    Title: `Bali`,
    Description: "Photos from a trip to Bali.",
    Teaser: "bali/012.jpg",
  },
  {
    ID: `tasmania`,
    Title: `Tasmania`,
  },
  {
    ID: `victoria-market`,
    Title: `Victoria Market`,
  },
  {
    ID: `the-walk-home-from-work`,
    Title: `The Walk Home From Work`,
  },
  {
    ID: `evening-architecture`,
    Title: `Evening Architecture`,
  },
  {
    ID: `cbd-sunday`,
    Title: `CBD Sunday`,
  },
  {
    ID: `melbourne-feb-2016`,
    Title: `Melbourne Feb. 2016`,
  },
  {
    ID: `jones-reserve-sunset`,
    Title: "Jones Reserve Sunset",
  },
  {
    ID: `day-street-gang`,
    Title: `Day Street Gang`,
  },
}

type Image struct {
  FileName,
  URL,
  MiniURL,
  MiniSheetURL string

  MiniSheetOffset int
  Index int
}

type Album struct {
  ID,
  Title,
  Teaser,
  Description,
  JSON string
  Images []*Image
}

func findImages(a *Album, directory string) {
  path := filepath.Join("assets", directory, a.ID, "full")
  files, err := ioutil.ReadDir(path)
  if err != nil {
    log.Fatal(err)
  }

  for i, file := range files {
    if file.IsDir() {
      continue
    }
    a.Images = append(a.Images, &Image{
      FileName: filepath.Join(path, file.Name()),
      URL: fmt.Sprintf("/%s/%s/full/%s", directory, a.ID, file.Name()),
      MiniURL: fmt.Sprintf("/%s/%s/mini/%s", directory, a.ID, file.Name()),
      // The mini sheet is a spritesheet, essentially,
      // combining all the mini thumbnails into one image 
      // so that the browser doesn't make a request for each.
      MiniSheetURL: fmt.Sprintf("/%s/%s/mini/minisheet.jpg", directory, a.ID),
      // Minis are 64 pixels wide, so this image has offset = 64 * i.
      // TODO can't remember why it's negative at the moment.
      //      maybe the spritesheet gets built backwards,
      //      or maybe just the way css background offset works.
      MiniSheetOffset: i * 64 * -1,
    })
  }
}

func init() {
  for _, a := range Art {
    findImages(a, "art")
    b, err := json.Marshal(a)
    must(err)
    a.JSON = string(b)
  }
  for _, a := range Photos {
    findImages(a, "photos")
    b, err := json.Marshal(a)
    must(err)
    a.JSON = string(b)
  }
}
