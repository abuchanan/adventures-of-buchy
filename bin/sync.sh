#!/bin/bash
aws s3 sync --exclude .DS_Store assets/ s3://adventures-of-buchy.xyz
aws s3 sync --exclude .DS_Store html/ s3://adventures-of-buchy.xyz
#  --cache-control max-age=31536000
