import React, { Component } from 'react';
import Header from './Header';
import ImageGrid from './ImageGrid';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchText: ""
    }

    this.searchTextChange = text => {
      this.setState({
        searchText: text
      });
    }

  }

  render() {
    return (
      <div className="App">
        <Header searchTextChange={this.searchTextChange} searchText={this.state.searchText}/>
        <ImageGrid searchText={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
