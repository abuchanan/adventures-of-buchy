package main

import (
  "bytes"
  "os"
  "github.com/nfnt/resize"
  "path/filepath"
  "image"
  "image/jpeg"
  "image/draw"
  "strings"
  "io/ioutil"
  "log"
)

func main() {
  log.SetFlags(0)

  files, err := ioutil.ReadDir(os.Args[1])
  check(err)

  var images []image.Image

  for _, f := range files {
    name := f.Name()
    if strings.HasSuffix(name, ".jpg") {
      path := filepath.Join(os.Args[1], name)
      log.Println(path)
      b, err := ioutil.ReadFile(path)
      check(err)

      img, _, err := image.Decode(bytes.NewReader(b))
      check(err)

      mini := resize.Resize(0, 64, img, resize.Lanczos3)
      images = append(images, mini)

      out, err := os.Create(filepath.Join(os.Args[2], name))
      check(err)
      check(jpeg.Encode(out, mini, nil))
      check(out.Close())
    }
  }

  sheet := image.NewRGBA(image.Rectangle{
    Min: image.Point{0, 0},
    Max: image.Point{64 * len(images), 64},
  })

  for i, img := range images {
    bb := img.Bounds()
    w := bb.Dx()
    p := image.Point{0, 0}
    if w > 64 {
      p.X = (w - 64) / 2
    }

    offset := i * 64
    pos := image.Rectangle{
      Min: image.Point{offset, 0},
      Max: image.Point{offset + 64, 64},
    }
    draw.Draw(sheet, pos, img, p, draw.Src)
  }

  out, err := os.Create(filepath.Join(os.Args[2], "minisheet.jpg"))
  check(err)
  check(jpeg.Encode(out, sheet, nil))
  check(out.Close())
}

func check(err error) {
  if err != nil {
    log.Fatalln(err)
  }
}
