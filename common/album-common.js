import React from 'react';
import { Viewer, ViewerControl } from './viewer';


function joinUrl(...args) {
  return '/' + args.join('/');
}

function buildImageData(path, length) {
  const images = [];

  for (let i = 0; i < length; i++) {
    const fileName = ('0000' + (i + 1)).slice(-3) + '.jpg';
    images.push({
      fileName,
      index: i,
      url: joinUrl(path, 'full', fileName),
      viewerUrl: joinUrl('viewer'),
      miniUrl: joinUrl(path, 'mini', fileName),
      miniSheetUrl: joinUrl(path, 'mini', 'minisheet.jpg'),
      miniSheetOffset: 64 * i,
    });
  }
  return images;
}


const Mini = ({ image, onViewImage }) => <div
    className="mini"
    onClick={ () => onViewImage(image) }
    style={ ({
      backgroundImage: `url(${ image.miniSheetUrl })`,
      backgroundPosition: `-${ image.miniSheetOffset }px 0`,
    }) }
  ></div>;

const Album = ({ title, images, onViewImage }) => {
  return <div className="album">
    <h1>{ title }</h1>
    { images.map(i => (
      <Mini
        key={i.fileName}
        image={i}
        onViewImage={onViewImage} />
    ))}
  </div>;
};


const AlbumsPlusViewer = React.createClass({

  getInitialState() {
    return {
      viewer: ViewerControl.createState(this.getAllImages(this.props.albums)),
    };
  },

  getAllImages(albums) {
    return albums
      .map(album => album.images)
      .reduce((cur, prev) => cur.concat(prev), []);
  },

  onDecrementImage() {
    this.setState({ viewer: ViewerControl.decrementImage(this.state.viewer) });
  },

  onIncrementImage() {
    this.setState({ viewer: ViewerControl.incrementImage(this.state.viewer) });
  },

  onOpen(image) {
    this.setState({ viewer: ViewerControl.open(this.state.viewer, image) });
  },

  onClose() {
    this.setState({ viewer: ViewerControl.close(this.state.viewer) });
  },

  render() {
      let content;

      if (this.state.viewer.isOpen) {
        content = <Viewer
          image={ this.state.viewer.currentImage }
          nextImage={ this.state.viewer.nextImage }
          onDecrementImage={ this.onDecrementImage }
          onIncrementImage={ this.onIncrementImage }
          onClose={ this.onClose }
        />;

      } else {
        content = this.props.albums.map(album => <Album
          key={album.title}
          onViewImage={ this.onOpen }
          {...album}
        />);
      }

      return <div>{ content }</div>;
  }
});

export { Mini, Album, AlbumsPlusViewer, buildImageData };
