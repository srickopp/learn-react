import React from 'react';

const Footer = (props) => {    
    return (
      <div>
        <h4>Ini Footer halaman {props.namanya}</h4>
        <p>@{props.tahun}</p>
      </div>
    )
  }

export default Footer;