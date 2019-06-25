import React from 'react';

function Image(props){
    return(
        <div>
            <img src={props.linkgambar}
            alt="gambar-makanan"
            width={props.lebar}
            />
        </div>
    )
}

export default Image;