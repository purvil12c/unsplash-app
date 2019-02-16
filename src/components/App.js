import React, { Component } from 'react';
import Header from './Header';
import ImageGrid from './ImageGrid';

class App extends Component {

  constructor(props){
    super(props);



  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ImageGrid/>
      </div>
    );
  }
}

export default App;
