import React, {Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      searchText: ""
    }

    this.searchTextChange = (event) => {
      this.setState({
        searchText: event.target.value
      });
      
    }
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Unsplash App</a>
        <div className="col-10" id="navbarSupportedContent">
          <form className="form-inline col-12 my-2 my-lg-0">
            <input value={this.state.searchText} onChange={this.searchTextChange} className="form-control mr-sm-2 col-12" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </nav>
    )
  }

}

export default Header;
