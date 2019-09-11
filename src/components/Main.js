import React, { Component } from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Menu Makanan",
            title2: "Menu Minuman",
            inputValue: "",
            inputKota:'',
            MenuMakanan: [
                {
                    nama: "Mie Ayam",
                    harga: 10000
                },
                {
                    nama: "Baks0",
                    harga: 20000
                },
                {
                    nama: "Mie Ayam Bakso",
                    harga: 20000
                },
                {
                    nama: "Soto",
                    harga: 10000
                },
            ]
        }

        this.rubahData = this.rubahData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    rubahData(){
        this.setState((state,props) => {
            return {
                title: state.title2,
                title2: state.title
            }
        })
    }

    handleChange(state, e){
        this.setState({ [state] : e.target.value});
        // const eventTarget = e.target.value;
        // this.setState((state, props) => {
        //     return{
        //         inputValue: eventTarget,                
        //     }
        // })
    }

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <button onClick={this.rubahData}>Rubah Data</button>
                <br/>
                <br/>
                <input
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={(e)=>this.handleChange("inputValue",e)}
                    placeholder="Nama"
                />
                <br/>
                <br/>
                <input
                    type="text"             
                    value={this.state.inputKota}
                    onChange={(e)=>this.handleChange("inputKota",e)}
                    placeholder="Masukkan nama kota"
                />                
                {this.state.MenuMakanan.map((value, index) => {                    
                    return(
                        <div key={index} >
                            <p>No: {index + 1}</p>
                            <p>Nama Makanan: {value.nama}</p>
                            <p>Harga: {value.harga}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Main;