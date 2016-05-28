import React from 'react';
import { Head } from '../common/components';
import { AlbumsPlusViewer } from '../common/album-common';

const AlbumPage = props => {
  const album = props.album;
  return <div>
    <Head
      title={ album.title }
      meta={[
        {property: "og:type", content: "article"},
        {property: "og:title", content: album.title},
        {property: "og:description", content: album.description},
        {property: "og:image", content: album.teaser},
      ]}
    />
    <AlbumsPlusViewer albums={[ album ]} />
  </div>;
};

export default AlbumPage;
