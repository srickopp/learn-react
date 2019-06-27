import React, { Component } from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <h3>Daftar Makananan Yang Kami Sediakan</h3>
                <td>
                    <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"></ListMakanan>
                </td>
                <td>
                    <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"></ListMakanan>
                </td>
                <td>
                    <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"></ListMakanan>
                </td>
                <td>
                    <ListMakanan gambar = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"></ListMakanan>
                </td>
                <td>
                    <ListMakanan gambar = "https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"></ListMakanan>
                </td>
            </div>
        )
    }
}

export default MenuMakanan;