import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      coba: "Enak Sekali",
      data: this.props.list,
      statusRendering: true,
      date: new Date(),
    }
    this.handlePesan = this.handlePesan.bind(this);    
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(param, e){
    e.preventDefault();
    alert(param);
  }

  //Komponen bawaan dari react, tidak perlu di rename.
  //Fungsinya mirip mounthed/created di VueJS
  //Fungsi ini akan berjalan otomatis saat selesai jalankan method render.
  componentDidMount(){
    console.log("jalan komponen did mount")
  }

  handleElement(){
    this.setState((state, props) =>{
      return{
        statusRendering: !state.statusRendering,
      }
    })
  }

  render(){    
      return(        
        <div>
          {this.state.statusRendering === true ? (
            <div>
              <h1>Selamat Datang</h1>
              <h2>Mantap Jiwa</h2>
            </div>            
          ) : (
            <div>
              <h1>Selamat Tinggal</h1>
              <h2>Jangan lupa kembali</h2>
            </div>
          )}           
          <button onClick={this.handleElement}>Change Value of Status Renderin</button>
        </div>
      )
    // return(
    //   <div>      
    //     <h2>Makanan Khas Indonesia coba </h2>
    //     <p>{this.state.coba}</p>        
    //     <p>{this.state.data}</p>
    //     <a href="/" onClick={e => this.handlePesan(this.state.data, e)}>Klik Disini</a>
    //   </div>
    // );
  }
}

  export default Header;