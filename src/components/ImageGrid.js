import React, {Component} from 'react';
import ImageView from './ImageView';

class ImageGrid extends Component{
  constructor(props){
    super(props);
    this.images = this.props.images;
  }

  render(){
    return(
      <div>
        <ImageView/>
        <ImageView/>
        <ImageView/>
      </div>
    );
  }

}

export default ImageGrid;
