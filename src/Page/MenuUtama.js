import React, { Component } from 'react';
import ListMenuUtama from '../ListData/ListMenuUtama';

class MenuUtama extends Component{
    render(){
        return(
            <div>
                <ListMenuUtama headerImage="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"></ListMenuUtama>
            </div>
        )
    }
}

export default MenuUtama;