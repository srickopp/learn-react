import React from 'react';

const Top = () =>{
    function handlePesan(param, e){
        e.preventDefault();
        alert(param)
    }
    return(
        <a href="/" onClick = { (e) => handlePesan("Pesan Halaman Top", e)} >
            Halaman Top
        </a>
    )
};

export default Top;