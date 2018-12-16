package main

import (
  "encoding/json"
  "fmt"
  "path/filepath"
  "strings"
  "log"
  "time"
  "os"
)

func main() {
  log.SetFlags(0)

  var paths []string
  filepath.Walk("build", func(path string, info os.FileInfo, err error) error {
    if strings.HasSuffix(path, "index.html") {
      path = strings.TrimPrefix(path, "build")
      paths = append(paths, path)
      path = strings.TrimSuffix(path, "index.html")
      if path == "" {
        return nil
      }
      paths = append(paths, path)
    }
    return nil
  })

  b, _ := json.Marshal(map[string]interface{}{
    "DistributionId": "E116ZPSQFHKCVF",
    "InvalidationBatch": map[string]interface{}{
      "Paths": map[string]interface{}{
        "Quantity": len(paths),
        "Items": paths,
      },
      "CallerReference": time.Now().Format(time.RFC3339),
    },
  })
  fmt.Println(string(b))
}
