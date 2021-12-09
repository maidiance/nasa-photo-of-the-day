import React from 'react';
import Picture from './Picture.js';
import { getNewPic } from './Api.js';

export default function MainBody(props){
    // console.log(props.randomPic);
    return (
        <div className='container'>
            <h3>More pictures</h3>
            {
                // Should be 3 images, but we use 1 to limit API calls
                // <Picture info={getNewPic()} />
            }
            {
                <Picture info={props.randomPic} />
            }
        </div>
    )
}