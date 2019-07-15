import React, { Component } from 'react';
import UrlItem from './UrlItem';
import PropTypes from 'prop-types';

class Urls extends Component {
  render() {
    return this.props.urls.map((url) => (
      <UrlItem key={url.id} url={url} />
    ));
  }
}

// PropTypes
Urls.propTypes = {
  urls: PropTypes.array.isRequired,
}

export default Urls;