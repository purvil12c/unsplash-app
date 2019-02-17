import React, {Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      searchText: ""
    }

    this.searchTextChange = (event) =>
      this.setState({
        searchText: event.target.value
      })

    this.searchButtonClick = () =>
      this.props.searchTextChange(this.state.searchText);

  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Unsplash App</a>
        <div id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input value={this.state.searchText} onChange={this.searchTextChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <a className="btn btn-success my-2 my-sm-0" onClick={this.searchButtonClick}>Search</a>
          </form>
        </div>
      </nav>
    )
  }

}

export default Header;
