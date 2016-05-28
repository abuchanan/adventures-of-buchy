import React from 'react';
import { AlbumsPlusViewer } from '../common/album-common';
import { Viewer } from '../common/viewer';


export default props => <main id="photos-page">
  <AlbumsPlusViewer albums={props.albums} />
</main>;
