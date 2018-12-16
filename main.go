package main

import (
  "path/filepath"
  "net/http"
  "log"
  "text/template"
  "os"
)

func main() {
  log.SetFlags(0)

  clean()
  must(ensureDir("build"))

  styleName := bundle("all.%x.css",
    "assets/styles/normalize.css",
    "assets/styles/common.css",
    "assets/styles/nav.css",
    "assets/styles/prose.css",
    "assets/styles/album.css",
    "assets/styles/location-search-demo.css",
    "assets/styles/code.css",
    "assets/styles/viewer.css",
  )
  viewerStyle := bundle("viewer.%x.css",
    "assets/styles/normalize.css",
    "assets/styles/common.css",
    "assets/styles/nav.css",
    "assets/styles/viewer.css",
  )
  js := bundle("all.%x.js",
    "assets/nav.js",
    "assets/viewer.js",
  )

  base := stack("base")
  viewer := stack("viewer")
  proseBase := stack("base", "prose")

  writePage("index", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
  })

  writePage("resume", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
    "Pubs": Pubs,
  })

  writePage("books", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
    "Pubs": Pubs,
    "Books": Books,
  })

  writePage("code", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
    "Programs": Programs,
  })

  writePage("art", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
    "Albums": Art,
  })

  writePage("photos", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
    "Albums": Photos,
  })

  writePage("prose", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
  })

  writePage("videos", base, map[string]interface{}{
    "Style": styleName,
    "JS": js,
  })

  for _, album := range Art {
    writeViewer("art", viewerStyle, js, viewer, album)
  }

  for _, album := range Photos {
    writeViewer("photos", viewerStyle, js, viewer, album)
  }

  for _, prose := range Proses {
    writePage("prose/" + prose.Name, proseBase, map[string]interface{}{
      "Style": styleName,
      "JS": js,
      "Prose": prose,
    })
  }

  log.Println("ready on http://localhost:8000")
  log.Fatal(http.ListenAndServe(":8000", http.FileServer(http.Dir("build"))))
}

func writeViewer(section, style, js string, tpl *template.Template, album *Album) {
  path := filepath.Join("build", section, album.ID, "index.html")
  fh, err := os.Create(path)
  must(err)
  must(tpl.Execute(fh, map[string]interface{}{
    "Style": style,
    "JS": js,
    "Album": album,
  }))
  must(fh.Close())
}

func writePage(name string, base *template.Template, data interface{}) {
  path := filepath.Join("pages", name + ".html")
  c := template.Must(base.Clone())
  x := template.Must(c.ParseFiles(path))

  outpath := ""
  if name != "index" {
    outpath = name
  }
  outpath = filepath.Join("build", outpath)
  ensureDir(outpath)
  outpath = filepath.Join(outpath, "index.html")

  fh, err := os.Create(outpath)
  must(err)

  must(x.Execute(fh, data))
  must(fh.Close())
}

func stack(names ...string) *template.Template {
  t := template.New(names[0] +".html")

  for _, name := range names {
    path := filepath.Join("templates", name + ".html")
    log.Println("parsing", path)
    c := template.Must(t.Clone())
    t = template.Must(c.ParseFiles(path))
  }
  return t
}
