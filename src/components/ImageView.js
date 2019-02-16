import React, {Component} from 'react';
import unsplash from '../services/UnsplashService';

class ImageView extends Component{
  constructor(props){
    super(props);
    this.image = this.props.image;
    unsplash.photos.getRandomPhoto({ count: "25" })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
  }
  render(){
    return(
      <div className="card" styles={{"width": "18rem"}}>
        <img className="card-img-top" src="http://www.tompetty.com/sites/g/files/g2000007521/f/styles/photo-carousel/public/Sample-image10-highres.jpg?itok=TDZEPjP8" alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
  }
}

export default ImageView;
