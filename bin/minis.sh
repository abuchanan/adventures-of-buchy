#!/bin/bash

albumPath=$1
albumName=$(basename $albumPath)
mkdir -p $albumPath/mini squares/$albumName;

for j in `ls -1 $albumPath/full/*.jpg`; do
  imageName=$(basename $j);
  # mogrify -interlace line $j;
  # jpegtran -optimize -copy none -outfile $j $j
  jpegtran -progressive -copy none -outfile $j $j
  convert $j -quality 65 -thumbnail x64 -strip  -gaussian-blur 0.5 $albumPath/mini/$imageName;
  convert $j -quality 65 -thumbnail 64x64^ -gravity center -extent 64x64 -strip squares/$albumName/$imageName;
done

squares=$(ls -1 squares/$albumName/*.jpg)
convert +append $squares -interlace line $albumPath/mini/minisheet.jpg;
