import React from 'react';

export default function Picture(props){
    return (
        <div className='img-container'>
            <img src={props.info.url} alt={props.info.title}></img>
            <h3>{props.info.title}</h3>
            <p>{props.info.date}</p>
        </div>
    )
}