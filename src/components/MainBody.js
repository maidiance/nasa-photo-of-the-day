import React from 'react';
import Picture from './Picture.js';
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 100%;
    .gallery {
        box-sizing: border-box;
        display: flex;
        padding: 2%;
        justify-content: space-between;
    }
    h3 {
        padding: 2%;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.tertiaryColor};
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