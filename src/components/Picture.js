import React from 'react';

export default function Picture(props){
    return (
        <div className='img-container'>
            <img src={props.url} alt={props.title}></img>
        </div>
    )
}