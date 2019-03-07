import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {
      ...this.props
    }
  }

  handleSearchText = (e) => {
    this.state.filterUpdate(this.props.products.filter((product) => {return product.name.toUpperCase().includes(e.target.value.toUpperCase()); }));
  }

  render(){
    return (
      <div>
        <h3>Search</h3>
        <input type='text' onChange={(e) => this.handleSearchText(e)} id='search'></input>
        <br></br>
        <input type='checkbox' id='instock'></input>
        <label htmlFor='instock'>Only show products in stock</label>
      </div>
      
    );
    
  }
}

export default SearchBar;