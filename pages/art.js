import React from 'react';
import { AlbumsPlusViewer } from '../common/album-common';
import { Viewer } from '../common/viewer';


export default props => <main id="art-page">
  <AlbumsPlusViewer albums={props.albums} />
</main>;
