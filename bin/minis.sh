#!/bin/bash

for albumPath in `ls -1d public/photos/* public/art/*`; do
  albumName=$(basename $albumPath);
  mkdir -p public/minis/$albumName squares/$albumName;

  echo "Processing $albumName";

  echo "Building minis and squares";

  for j in `ls -1 $albumPath/*.jpg`; do
    imageName=$(basename $j);
    # mogrify -interlace line $j;
    jpegtran -optimize -copy none -outfile $j $j
    convert $j -quality 65 -thumbnail x64 -strip  -gaussian-blur 0.5 public/minis/$albumName/$imageName;
    convert $j -quality 65 -thumbnail 64x64^ -gravity center -extent 64x64 -strip squares/$albumName/$imageName;
  done

  echo "Making minisheet";
  squares=$(ls -1 squares/$albumName/*.jpg)
  convert +append $squares -interlace line public/minis/$albumName/minisheet.jpg;
done
