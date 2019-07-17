import React,{Component} from 'react'
import AddUrl from '../../components/urlsTodo/AddUrl';
import axios from 'axios';



export default class UrlShortener extends Component {
  state = {
    urls: [

    ]
  }

  addUrl = (url_original) => {
    axios.post('http://127.0.0.1:5000/url_shortener', {
      url_original,
    })
      .then(this.setState({ urls: [] }))
      .then(res => this.setState({ urls: [...this.state.urls, res.data] }));
  }
  render (){
    return (
      <React.Fragment>
        <p>EL url shortenersito</p>
        <AddUrl addUrl={this.addUrl}/>
        <p>
        {this.state.urls.map((url) => (
        <div>
          <p> SE GENERO LA URL CORTA</p>
          <p>url={url.url_corta} </p>
        </div>
     
       
    )
    )
    }
    </p>
      </React.Fragment>
    )
  }
}


