import 'babel-polyfill';

import React from 'react';
import { Head } from '../common/components';
import { LocationSearch } from 'react-mapbox-location-search/dist/index';

var Mapbox_access_key = 'pk.eyJ1IjoiYnVjaGFuYWUiLCJhIjoiY2loNzR0Y3U5MGd2OXZka3QyMHJ5bXo0ZCJ9.HdT8S-gTjPRkTb4v8Z23KQ';

var LocationSearchDemo = React.createClass({
  getInitialState() {
    return {'selected': ''};
  },
  render() {
    return (<div >
      <div>
        <label>Enter a location search query</label>
        <LocationSearch
          Mapbox_access_key={Mapbox_access_key}
          onResultSelected={result => this.setState({
            selected: JSON.stringify(result, null, 2)
          })}
        />
      </div>
      <div>
        <label>Example JSON output</label>
        <textarea className="selected-json" value={this.state.selected} />
      </div>
    </div>);
  }
});

export default props => <main id="location-search-demo"><LocationSearchDemo /></main>;
