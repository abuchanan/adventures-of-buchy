#!/bin/bash
rclone copy -P ./build/ eabuc-s3:eabuc.com

# Invalidate html
go run bin/invalidation.go > invalidate.json
aws cloudfront create-invalidation --cli-input-json file://invalidate.json

#aws s3 sync \
#  --exclude "*.DS_Store" \
#  --cache-control "max-age=604800" \
#  assets s3://eabuc.com
#
#aws s3 sync \
#  --exclude "*.DS_Store" \
#  --exclude "*.js" \
#  --exclude "*.css" \
#  build s3://eabuc.com
#
#aws s3 sync \
#  --exclude "*" \
#  --include "*.js" \
#  --include "*.css" \
#  --cache-control "max-age=604800" \
#  build s3://eabuc.com
