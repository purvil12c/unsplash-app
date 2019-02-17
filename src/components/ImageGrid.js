import React, {Component} from 'react';
import ImageView from './ImageView';
import unsplash from '../services/UnsplashService';

class ImageGrid extends Component{
  constructor(props){
    super(props);

    unsplash.photos.getRandomPhoto({ count: "25" })
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({
        images: json
      })
    })
    .catch(err=>{
      alert("Some API error occured (Maybe limit reached) \n"+err);
    });
  }

  componentWillReceiveProps(props){
    this.searchText = props.searchText;
    if(this.searchText==""){
      unsplash.photos.getRandomPhoto({ count: "25" })
      .then(response => response.json())
      .then(json => {
        this.setState({
          images: json
        })
      })
      .catch(err=>{
        alert("Some API error occured (Maybe limit reached) "+err);
      });
    }
    else{
      unsplash.search.photos(this.searchText, 1, 25)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          images: json.results
        })
      })
      .catch(err=>{
        alert("Some API error occured (Maybe limit reached) "+err);
      });
    }
  }

  render(){
    return(
      <div className="card-columns">
        {
          this.state!=null &&
          this.state.images.map(image =>
            <ImageView image={image} unsplashService={unsplash}/>
          )
        }
      </div>
    );
  }

}

export default ImageGrid;
