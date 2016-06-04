import React from 'react';
import Hammer from 'react-hammerjs';

const ViewerControl = {

  createState(images) {
    return {
      isOpen: false,
      images,
      currentImage: null,
      // TODO what is the best place to track the direction?
      direction: "forward"
    };
  },

  prefetchList(state) {
    const max_prefetch = 5;
    const position = state.images.indexOf(state.currentImage);

    if (state.direction == 'backward') {
      const start = Math.max(0, position - max_prefetch);
      const images = state.images.slice(start, position);
      images.reverse();
      return images;

    } else {
      return state.images.slice(position + 1, position + max_prefetch + 1);
    }
  },

  incrementImage(state) {
    const position = state.images.indexOf(state.currentImage);

    if (position < state.images.length - 1) {
      const currentImage = state.images[position + 1];

      return {
        isOpen: state.isOpen,
        images: state.images,
        currentImage,
        direction: "forward",
      };
    }
    return state;
    // TODO   this.context.router.replace(nextImage.viewer_url);
  },

  decrementImage(state) {
    const position = state.images.indexOf(state.currentImage);

    if (position > 0) {
      const currentImage = state.images[position - 1];

      return {
        isOpen: state.isOpen,
        images: state.images,
        currentImage,
        direction: "backward",
      };
    }
    return state;
    // TODO   this.context.router.replace(previousImage.viewer_url);
  },

  open(state, image) {

    const position = state.images.indexOf(image);

    return {
      isOpen: true,
      images: state.images,
      currentImage: image,
      direction: "forward",
    };
  },

  close(state) {
    return {
      isOpen: false,
      images: state.images,
      currentImage: null,
    };
  }
}


const Viewer = React.createClass({

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  },

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
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

  onSwipe(event) {
    if (event.velocityX < 0) {
      this.props.onIncrementImage();
    } else if (event.velocityX > 0) {
      this.props.onDecrementImage();
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
      <Hammer onSwipe={this.onSwipe}>
        <div className="viewer-image" style={ style } ref="viewerImage"></div>
      </Hammer>
    </div>;
  }
});

export { Viewer, ViewerControl };
