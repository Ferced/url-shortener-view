import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Urls from './components/urlsTodo/Urls';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    urls: []
  }

  componentDidMount() {
    
    axios.get('http://127.0.0.1:5000/url_shortener')
      .then(res =>this.setState({ urls: res.data }))
  }


  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Urls urls={this.state.urls}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
