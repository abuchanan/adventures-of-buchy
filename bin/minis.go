package main

import (
  "bytes"
  "fmt"
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

  if len(os.Args) != 2 {
    log.Fatalln("usage: minis.go assets/photos/<album>/")
  }

  baseDir := os.Args[1]
  fullDir := filepath.Join(baseDir, "full")
  miniDir := filepath.Join(baseDir, "mini")
  miniSheet := filepath.Join(miniDir, "minisheet.jpg")

  files, err := ioutil.ReadDir(fullDir)
  check(err)

  if len(files) == 0 {
    log.Fatalln("no files found")
  }

  err = ensureDir(fullDir)
  check(err)

  err = ensureDir(miniDir)
  check(err)

  var images []image.Image

  for _, f := range files {
    name := f.Name()
    if strings.HasSuffix(name, ".jpg") {
      path := filepath.Join(fullDir, name)
      log.Println(path)
      b, err := ioutil.ReadFile(path)
      check(err)

      img, _, err := image.Decode(bytes.NewReader(b))
      check(err)

      mini := resize.Resize(0, 64, img, resize.Lanczos3)
      images = append(images, mini)

      out, err := os.Create(filepath.Join(miniDir, name))
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

  out, err := os.Create(miniSheet)
  check(err)
  check(jpeg.Encode(out, sheet, nil))
  check(out.Close())
}

func check(err error) {
  if err != nil {
    log.Fatalln(err)
  }
}

func ensureDir(path string) error {
  // Check that the data directory exists.
  s, err := os.Stat(path)
  if os.IsNotExist(err) {
    err := os.MkdirAll(path, 0700)
    if err != nil {
      return fmt.Errorf("creating data directory: %v", err)
    }
    return nil
  } else if err != nil {
    return fmt.Errorf("checking for data directory: %v", err)
  }

  if !s.IsDir() {
    return fmt.Errorf("%q is a file, but mailer needs to put a directory here", path)
  }
  return nil
}
