import React from 'react';
import Picture from './Picture.js';

export default function MainBody(props){
    return (
        <div className='container'>
            <h3>More pictures</h3>
            {
                /* map over images */
                props.images.map(image => {
                    return <Picture url={image} title={image.title}/>
                })
            }
        </div>
    )
}