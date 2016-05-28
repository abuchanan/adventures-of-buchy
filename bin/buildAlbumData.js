#!/usr/bin/env node --harmony
'use strict';

var fs = require('fs');
var pathLib = require('path');

function joinUrl(...args) {
    return '/' + args.join('/');
}

function publicPath(...args) {
    return pathLib.join(__dirname, '..', 'public', ...args);
}

function getAlbumImages(groupName, albumId) {
    var images = {};
    var imageOrder = [];
    var previous;

    // Get a list of files in the album directory
    fs.readdirSync(publicPath(groupName, albumId))
    // Ignore files such as .DS_Store and meta.json
    .filter(name => name[0] != '.' && name != 'meta.json')
    .forEach((imageName, imageIndex) => {
        if (previous) {
          images[previous].next = imageName;
        }

        imageOrder.push(imageName);
        images[imageName] = {
            id: imageName,
            previous,
            url: joinUrl(groupName, albumId, imageName),
            viewer_url: joinUrl('viewer', groupName, albumId, imageName),
            mini_url: joinUrl('minis', albumId, imageName),
            mini_sheet_url: joinUrl('minis', albumId, 'minisheet.jpg'),
            mini_sheet_offset: 64 * imageIndex,
        };
        previous = imageName;
    });

    return { images, imageOrder };
}

function getAlbums(groupName) {
    var albums = {};
    var albumOrder = [];

    fs.readdirSync(publicPath(groupName))
    // Ignore files such as .DS_Store
    .filter(name => name[0] != '.')
    .forEach(albumId => {
        albumOrder.push(albumId);
        albums[albumId] = {
            id: albumId,
            meta: require(publicPath(groupName, albumId, 'meta.json')),
            url: joinUrl(groupName, albumId),
        };
        Object.assign(albums[albumId], getAlbumImages(groupName, albumId));
    });

    albumOrder.reverse();
    return { albums, albumOrder };
}

var data = {
  albumGroups: {
    art: getAlbums('art'),
    photos: getAlbums('photos'),
  },
};

fs.writeFileSync(publicPath("data.json"), "var SITE_DATA = " + JSON.stringify(data, null, 2));
