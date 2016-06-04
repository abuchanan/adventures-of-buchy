import React from 'react';
import { AlbumsPlusViewer } from '../common/album-common';
import { Viewer } from '../common/viewer';
import { Head } from '../common/components';


export default props => <main id="art-page">
  <Head
    title="Art"
  />

  <AlbumsPlusViewer albums={props.albums} />
</main>;
