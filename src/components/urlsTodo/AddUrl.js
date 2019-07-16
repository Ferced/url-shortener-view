import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddUrl extends Component {
  state = {
    url: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addUrl(this.state.url);
    this.setState({ url: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="url" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Agregar url ..." 
          value={this.state.url}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Agregar" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

// PropTypes
AddUrl.propTypes = {
  AddUrl: PropTypes.func.isRequired
}

export default AddUrl
