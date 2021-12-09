import React from 'react';
import Picture from './Picture.js';

export default function MainBody(props){
    
    return (
        <div className='container'>
            <h3>More pictures</h3>
            {
                props.randomPics.map(image => {
                    return <Picture info={image} />;
                })
            }
        </div>
    )
}