import React from 'react';
import { Head } from '../common/components';
import TreeLib from 'tree';

var TreeDemo = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
    var index = Math.floor(Math.random() * TreeLib.versions.length);
    const tree = TreeLib.versions[index]();
    TreeLib.Showcase(tree, this.refs.treeContainer);
  },

  render() {
    return (<div >
      <div id="tree-container" ref="treeContainer"></div>
    </div>);
  }
});

export default props => <main id="tree-demo"><TreeDemo /></main>;
