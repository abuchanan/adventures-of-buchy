package main

import (
  "bytes"
  "crypto/sha1"
  "path/filepath"
  "os"
  "io"
  "fmt"
)

func bundle(tpl string, paths ...string) string {
  hash := sha1.New()
  buf := &bytes.Buffer{}

  for _, p := range paths {
    s, err := os.Open(p)
    must(err)

    w := io.MultiWriter(buf, hash)
    _, err = io.Copy(w, s)
    must(err)

    fmt.Fprintln(w)
    s.Close()
  }

  name := fmt.Sprintf(tpl, hash.Sum(nil)[:10])
  fh, err := os.Create(filepath.Join("build", name))
  must(err)
  _, err = io.Copy(fh, buf)
  must(err)
  must(fh.Close())
  return name
}
