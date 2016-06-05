#!/bin/bash
aws s3 sync \
  --exclude "*.DS_Store" \
  --cache-control "max-age=604800" \
  assets s3://adventures-of-buchy.xyz

aws s3 sync \
  --exclude "*.DS_Store" \
  --exclude "*.js" \
  --exclude "*.css" \
  built s3://adventures-of-buchy.xyz

aws s3 sync \
  --exclude "*" \
  --include "*.js" \
  --include "*.css" \
  --cache-control "max-age=604800" \
  built s3://adventures-of-buchy.xyz
