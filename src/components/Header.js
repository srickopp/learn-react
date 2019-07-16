import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.json = {
      coba: "Enak Sekali",
      data: this.props.list

    }
    this.handlePesan = this.handlePesan.bind(this);    
  }

  handlePesan(){
    alert(this.json.coba);
  }


  render(){
    return(
      <div>      
        <h2>Makanan Khas Indonesia coba </h2>
        <p>{this.json.coba}</p>        
        <p>{this.json.data}</p>
        <a href="/" onClick={this.handlePesan}>Klik Disini</a>
      </div>
    );
  }
}

  export default Header;