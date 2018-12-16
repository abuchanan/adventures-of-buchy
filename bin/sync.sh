#!/bin/bash
aws s3 sync \
  --exclude "*.DS_Store" \
  --cache-control "max-age=604800" \
  assets s3://eabuc.com

aws s3 sync \
  --exclude "*.DS_Store" \
  --exclude "*.js" \
  --exclude "*.css" \
  build s3://eabuc.com

aws s3 sync \
  --exclude "*" \
  --include "*.js" \
  --include "*.css" \
  --cache-control "max-age=604800" \
  build s3://eabuc.com
