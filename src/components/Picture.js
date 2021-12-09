import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2%;
    max-width: 100%;
    box-sizing: border-box;
    background-color: ${props => props.theme.secondaryColor};

    .details{
        margin: 2% auto;
        width: 80%;
        padding: 2%;
    }
    h3 {
        border-style: solid;
        border-color: ${props => props.theme.black};
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.black};
    }
    p {
        padding: 2%;
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.white};
    }
    img {
        max-height: 400px;
        max-width: 100%;
    }
`

export default function Picture(props){
    return (
        <StyledPicture className='img-container'>
            <img src={props.info.url} alt={props.info.title}></img>
            <div className='details'>
                <h3>{props.info.title}</h3>
                <p>{props.info.date}</p>
            </div>
        </StyledPicture>
    )
}