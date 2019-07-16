import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footeringui from './components/layout/Footer';
import Urls from './components/urlsTodo/Urls';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';
import AddUrl from './components/urlsTodo/AddUrl';

class App extends Component {
  state = {
    urls: []
  }

  componentDidMount() {
    
    axios.get('http://127.0.0.1:5000/url_shortener')
      .then(res =>this.setState({ urls: res.data }))
  }

  addUrl = (url_original) => {
      axios.post('http://127.0.0.1:5000/url_shortener', {
        url_original,
      })
        .then(res => this.setState({ urls: [...this.state.urls, res.data] }));
    }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddUrl addUrl={this.addUrl}/>
                <Urls urls={this.state.urls}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
           <Footeringui />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
