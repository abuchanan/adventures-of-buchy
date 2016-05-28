import React from 'react';

const ViewerControl = {

  createState(images) {
    return {
      isOpen: false,
      images,
      currentImage: null,
      nextImage: null,
    };
  },

  incrementImage(state) {
    const position = state.images.indexOf(state.currentImage);

    if (position < state.images.length - 1) {
      const currentImage = state.images[position + 1];
      const nextImage = state.images[position + 2];

      return {
        isOpen: state.isOpen,
        images: state.images,
        currentImage,
        nextImage,
      };
    }
    return state;
    // TODO   this.context.router.replace(nextImage.viewer_url);
  },

  decrementImage(state) {
    const position = state.images.indexOf(state.currentImage);

    if (position > 0) {
      const currentImage = state.images[position - 1];
      const nextImage = state.images[position - 2];

      return {
        isOpen: state.isOpen,
        images: state.images,
        currentImage,
        nextImage,
      };
    }
    return state;
    // TODO   this.context.router.replace(previousImage.viewer_url);
  },

  open(state, image) {

    const position = state.images.indexOf(image);
    const nextImage = state.images[position + 1];
    return {
      isOpen: true,
      images: state.images,
      currentImage: image,
      nextImage,
    };
  },

  close(state) {
    return {
      isOpen: false,
      images: state.images,
      currentImage: null,
      nextImage: null,
    };
  }
}


const Viewer = React.createClass({

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
    this.prefetch();
  },

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  },

  componentDidUpdate() {
    this.prefetch();
  },

  prefetch() {
    if (this.props.nextImage) {
      (new Image()).src = this.props.nextImage.url;
      (new Image()).src = this.props.nextImage.miniUrl;
    }
  },

  handleKey(e) {
    // Right arrow
    if (e.which == 39) {
      e.stopPropagation();
      e.preventDefault();
      this.props.onIncrementImage();

    // Left arrow
    } else if (e.which == 37) {
      e.stopPropagation();
      e.preventDefault();
      this.props.onDecrementImage();

    } else if (e.which == 27) {
      this.props.onClose();
    }
  },

  render() {
    const image = this.props.image;

    const style = { backgroundImage: `url(${ image.url }), url(${ image.miniUrl})` };

    return <div className='viewer'>
      <div className='viewer-toolbar'>
        <button className="viewer-back" onClick={ this.props.onClose }></button>
        <button className="viewer-next" onClick={ this.props.onIncrementImage }></button>
        <button className="viewer-previous" onClick={ this.props.onDecrementImage }></button>
      </div>
      <div className="viewer-image" style={ style }></div>
    </div>;
  }
});

export { Viewer, ViewerControl };
