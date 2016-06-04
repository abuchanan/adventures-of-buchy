import React from 'react';
import { AlbumsPlusViewer } from '../common/album-common';
import { Head } from '../common/components';


export default props => <main id="photos-page">
  <Head
    title="Photos"
  />

  <AlbumsPlusViewer albums={props.albums} />
</main>;
