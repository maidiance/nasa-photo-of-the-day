import React from 'react';
import Picture from './Picture.js';
import styled from 'styled-components';

const StyledContainer = styled.div`
    .gallery {
        box-sizing: content-box;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    
`

export default function MainBody(props){
    
    return (
        <StyledContainer className='container'>
            <h3>More pictures</h3>
            <div className='gallery'>
                {
                    props.randomPics.map((image, idx) => {
                        return <Picture key={idx} info={image} />;
                    })
                }
            </div>
        </StyledContainer>
    )
}