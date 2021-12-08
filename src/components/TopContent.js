import React from 'react';

export default function TopContent(props) {
    if(!props.img) return <h3>Loading...</h3>;
    return (
        <div className='container'>
            <h2><span role="img" aria-label='camera'>📷</span> Photo of the day</h2>
            <img src={props.img} alt='NASA provided'></img>
        </div>
    )
}