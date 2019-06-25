import React from 'react';
import Image from './Image';

function List(){
    return (
        <div>
            <ol>
                <Image />
                <li>Nasi Padang</li>
                <li>Sate</li>
                <li>Soto Lamongan</li>
            </ol>
        </div>
    )
}

export default List;