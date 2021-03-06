import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UrlItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    }
  }

  render() {
    const { id, url_corta, url_original } = this.props.url;
    return (
      <div style={this.getStyle()}>
        <p>

          Url corta: { url_corta} 
        </p>
        <p>
          Url orginal: { url_original} 
        </p>

      </div>
    )
  }
}

// PropTypes
UrlItem.propTypes = {
  url: PropTypes.object.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default UrlItem
