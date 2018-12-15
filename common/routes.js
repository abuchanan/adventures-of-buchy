import React from 'react';
import { createRoutes } from 'react-router/lib/RouteUtils';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import { Page } from './components';
import { buildImageData } from './album-common';

import LatestPage from '../pages/latest';
import BooksPage from '../pages/books';
import CodePage from '../pages/code';
import ResumePage from '../pages/resume';
import VideosPage from '../pages/videos';
import AlbumPage from '../pages/album';
import ArtPage from '../pages/art';
import PhotosPage from '../pages/photos';
import ProsePage from '../pages/prose';
import EfficientlyLoadingPhotos from '../pages/prose/efficiently-loading-photos';
import PhotographyEndsOrMeans from '../pages/prose/photography-ends-or-means';
import BuildingThisWebsite from '../pages/prose/building-this-website';
import ImprovedPrefetching from '../pages/prose/improved-prefetching';
import LocationSearchDemo from '../demo/location-search';
import TreeDemo from '../demo/tree';

export default function getRoutes(isClient) {

// function Async(loader) {
//   extraProps = extraProps || {};
//
//   // Synchonous (server-side) environment. The loader is actually the Component.
//   if (!isClient) {
//     return props => {
//       return React.createElement(loader, {...props, ...extraProps}, props.children);
//     };
//   }
//
//   // Async envinroment. Loader is wrapped in a component while will defer rendering.
//   return React.createClass({
//     getInitialState() {
//       return {Component: null};
//     },
//     componentWillMount() {
//       loader(mod => this.setState({Component: mod.default}));
//     },
//     render() {
//       if (!this.state.Component) return null;
//       const props = {...this.props, ...extraProps};
//       return React.createElement(this.state.Component, props, this.props.children);
//     }
//   });
// }

function lazy(loader, onload) {
  return (props, cb) => {
    if (!isClient) {
      // Synchonous (server-side) environment. The loader is actually the Component.
      const Component = loader;
      if (onload) {
        onload(Component, props, cb);
      } else {
        cb(null, Component);
      }
    } else {
      // Async environment (client-size).
      loader(module => {
        const Component = module.default;
        if (onload) {
          onload(Component, props, cb);
        } else {
          cb(null, Component);
        }
      });
    }
  };
}

const Demos = [
  { id: 'tree', component: TreeDemo },
  { id: 'location-search', component: LocationSearchDemo },
];

const Posts = [
  { id: 'improved-prefetching', component: ImprovedPrefetching },
  { id: 'building-this-website', component: BuildingThisWebsite },
  { id: 'efficiently-loading-photos', component: EfficientlyLoadingPhotos },
  { id: 'photography-ends-or-means', component: PhotographyEndsOrMeans },
];

const ArtAlbums = [
  {
    id: 'art-2015',
    title: "Art in 2015",
    images: buildImageData('art/2015', 27),
  },
  {
    id: 'art-2014',
    title: "Art in 2014",
    images: buildImageData('art/2014', 11),
  }
];

const PhotoAlbums = [
  {
    id: 'life-in-august',
    title: 'Life in August',
    description: 'Ah, the great outdoors.',
    teaser: 'http://adventures-of-buchy.xyz/photos/life-in-august/full/021.jpg',
    images: buildImageData('photos/life-in-august', 39),
  },
  {
    id: 'nehalem-bay-birds',
    title: 'Nehalem Bay Birds',
    description: 'Herons, geese, and friends.',
    teaser: 'http://adventures-of-buchy.xyz/photos/nehalem-bay-birds/full/003.jpg',
    images: buildImageData('photos/nehalem-bay-birds', 19),
  },
  {
    id: 'backyard-animals',
    title: 'Backyard Animals',
    description: 'Animals around the house and yard.',
    teaser: "http://adventures-of-buchy.xyz/photos/backyard-animals/full/005.jpg",
    images: buildImageData('photos/backyard-animals', 16),
  },
  {
    id: 'backyard-droplets',
    title: 'Backyard Droplets',
    description: 'The morning after a rain leaves lots of droplets on the plants.',
    teaser: "http://adventures-of-buchy.xyz/photos/backyard-droplets/full/005.jpg",
    images: buildImageData('photos/backyard-droplets', 19),
  },
  {
    id: 'backyard-flowers',
    title: 'Backyard Flowers',
    description: 'Flowers in the backyard at home.',
    teaser: "http://adventures-of-buchy.xyz/photos/backyard-flowers/full/005.jpg",
    images: buildImageData('photos/backyard-flowers', 15),
  },
  {
    id: 'the-fourth',
    title: 'The Fourth',
    description: 'First weekend back home after two years, seeing family and friends.',
    teaser: "http://adventures-of-buchy.xyz/photos/the-fourth/full/005.jpg",
    images: buildImageData('photos/the-fourth', 19),
  },
  {
    id: 'cathedrals-are-cool',
    title: 'Cathedrals are cool',
    description: 'A day spent being a tourist in Melbourne.',
    teaser: "http://adventures-of-buchy.xyz/photos/cathedrals-are-cool/full/005.jpg",
    images: buildImageData('photos/cathedrals-are-cool', 15),
  },
  {
    id: 'a-day-at-the-zoo',
    title: 'A Day at the Zoo',
    description: 'Taking the new zoom lens for a walk to the Melbourne Zoo',
    teaser: "http://adventures-of-buchy.xyz/photos/a-day-at-the-zoo/full/036.jpg",
    images: buildImageData('photos/a-day-at-the-zoo', 117),
  },
  {
    id: 'may-days-in-melbourne',
    title: 'May Days in Melbourne',
    description: 'Strolling the streets of Melbourne',
    teaser: "http://adventures-of-buchy.xyz/photos/may-days-in-melbourne/full/018.jpg",
    images: buildImageData('photos/may-days-in-melbourne', 29),
  },
  {
    id: 'healesville',
    title: 'Healesville',
    description: "A trip to the Healesville animal sanctuary, complete with emu, kangaroo, koala, pelicans, and spectacular birds of prey",
    teaser: "http://adventures-of-buchy.xyz/photos/healesville/full/021.jpg",
    images: buildImageData('photos/healesville', 50),
  },
  {
    id: 'broken-train',
    title: 'Broken Train',
    images: buildImageData('photos/broken-train', 10),
  },
  {
    id: 'bali',
    title: 'Bali',
    images: buildImageData('photos/bali', 46),
    description: "Photos from a trip to Bali.",
    teaser: "http://adventures-of-buchy.xyz/photos/bali/full/012.jpg",
  },
  {
    id: 'tasmania',
    title: 'Tasmania',
    images: buildImageData('photos/tasmania', 83),
  },
  {
    id: 'victoria-market',
    title: 'Victoria Market',
    images: buildImageData('photos/victoria-market', 18),
  },
  {
    id: 'the-walk-home-from-work',
    title: 'The Walk Home From Work',
    images: buildImageData('photos/the-walk-home-from-work', 16),
  },
  {
    id: 'evening-architecture',
    title: 'Evening Architecture',
    images: buildImageData('photos/evening-architecture', 14),
  },
  {
    id: 'cbd-sunday',
    title: 'CBD Sunday',
    images: buildImageData('photos/cbd-sunday', 3),
  },
  {
    id: 'melbourne-feb-2016',
    title: 'Melbourne Feb. 2016',
    images: buildImageData('photos/melbourne-feb-2016', 50),
  },
  {
    id: 'jones-reserve-sunset',
    title: "Jones Reserve Sunset",
    images: buildImageData('photos/jones-reserve-sunset', 5),
  },
  {
    id: 'day-street-gang',
    title: 'Day Street Gang',
    images: buildImageData('photos/day-street-gang', 5),
  },
];

const AllAlbums = ArtAlbums.concat(PhotoAlbums);
const albumsById = {};
AllAlbums.forEach(album => albumsById[album.id] = album);


const routes = createRoutes([
  {
    path: "/",
    component: Page,
    indexRoute: {
      getComponent: lazy(LatestPage),
    },
    childRoutes: [
      {
        path: "books",
        getComponent: lazy(BooksPage),
      },
      {
        path: "code",
        getComponent: lazy(CodePage),
      },
      {
        path: "resume",
        getComponent: lazy(ResumePage),
      },
      {
        path: "videos",
        getComponent: lazy(VideosPage),
      },
      {
        path: "album/:albumId",
        getComponent: lazy(AlbumPage, (Component, props, cb) => {
          const album = albumsById[props.params.albumId]
          cb(null, props => <Component {...props} album={album} />);
        }),
      },
      {
        path: "art",
        getComponent: lazy(ArtPage, (Component, props, cb) => {
          cb(null, props => <Component {...props} albums={ArtAlbums} />);
        }),
      },
      {
        path: "photos",
        getComponent: lazy(PhotosPage, (Component, props, cb) => {
          cb(null, props => <Component {...props} albums={PhotoAlbums} />);
        }),
      },
      {
        path: "prose",
        getComponent: lazy(ProsePage, (Component, props, cb) => {
          cb(null, props => <Component {...props} isClient={isClient} posts={Posts} />);
        }),
      },
    ].concat(Posts.map(post => ({
      path: `prose/${post.id}`,
      getComponent: lazy(post.component),
    })))
    .concat(Demos.map(demo => ({
      path: `/demo/${demo.id}`,
      getComponent: lazy(demo.component),
    })))
  }
]);


return {
  routes,
  Posts,
  Demos,
  AllAlbums,
  ArtAlbums,
  PhotoAlbums,
};

}
