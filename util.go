package main

import (
  "fmt"
  "os"
  "log"
  "github.com/otiai10/copy"
)

func clean() {
  must(os.RemoveAll("build"))
  must(copy.Copy("assets", "build"))
}

func must(err error) {
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
