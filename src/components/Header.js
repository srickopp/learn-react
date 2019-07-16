import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      coba: "Enak Sekali",
      data: this.props.list

    }
    this.handlePesan = this.handlePesan.bind(this);    
  }

  handlePesan(param, e){
    e.preventDefault();
    alert(param);
  }


  render(){
    return(
      <div>      
        <h2>Makanan Khas Indonesia coba </h2>
        <p>{this.state.coba}</p>        
        <p>{this.state.data}</p>
        <a href="/" onClick={e => this.handlePesan(this.state.data, e)}>Klik Disini</a>
      </div>
    );
  }
}

  export default Header;