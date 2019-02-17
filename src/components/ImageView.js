import React, {Component} from 'react';
import download from 'image-downloader';

class ImageView extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: this.props.image
    }

    // this.downloadImage = () => {
    //   this.props.unsplashService.photos.downloadPhoto(this.state.image);
    //   // console.log(this.state.image.urls.full);
    //   // fetch(this.state.image.urls.full)
    //   //   .then(response => response.body)
    //   //   .then(image => image.pipe(fs.createWriteStream("download.jpg")));
    //   const options = {
    //     url: this.state.image.urls.full,
    //     dest: 'downloads'                  // Save to /path/to/dest/image.jpg
    //   }
    //
    //   download.image(options)
    //     .then(({ filename, image }) => {
    //       console.log('File saved to', filename)
    //     })
    //     .catch((err) => {
    //       console.error(err)
    //     })
    // }
  }

  componentWillReceiveProps(props){
    this.setState({
      image: props.image
    })
  }

  render(){
    return(
      <div className="card" styles={{"width": "18rem"}}>
        <img onClick={this.downloadImage} className="card-img-top" src={this.state.image.urls.small} alt="Card image cap"/>
        <div className="card-body">
          <h3><a href={this.state.image.user.links.html} target="_blank">{this.state.image.user.name}</a></h3>
          <br/>
          <a href={this.state.image.urls.full} target="_blank" download>Download</a>
        </div>
      </div>
    )
  }
}

export default ImageView;
