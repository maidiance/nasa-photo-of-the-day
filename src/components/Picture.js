import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;

    .details{
        margin: 0 auto;
        padding: 2%;
        border-style: solid;
        border-color: ${props => props.theme.black};
        background-color: ${props => props.theme.secondaryColor};
    }
    h3 {
        color: ${props => props.theme.black};
    }
    p {
        color: ${props => props.theme.white};
    }
`

export default function Picture(props){
    return (
        <StyledPicture className='img-container'>
            <img src={props.info.url} alt={props.info.title}></img>
            <div className='details'>
                <h3>{props.info.title}</h3>
            <   p>{props.info.date}</p>
            </div>
        </StyledPicture>
    )
}