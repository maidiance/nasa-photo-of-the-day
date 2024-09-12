import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
    margin: 0 auto;
    padding: 2%;
    width: 60%;
    border-style: solid;
    border-color: ${props => props.theme.black};
    background-color: ${props => props.theme.secondaryColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
        width: 70%;
        max-width: 100%;
    }
    .detail {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    h2{
        width: 90%;
    }
    h3 {
        width: 100%;
        padding: 2%;
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.white};
    }
    p {
        margin: 0 auto;
        width: 60%;
        color: ${props => props.theme.black};
    }
`

export default function TopContent(props) {
    if(!props.img) return <h3>Loading...</h3>;
    return (
        <StyledContent className='container'>
            <h2><span role="img" aria-label='camera'>📷</span> Photo of the day</h2>
            <img className='top-img' src={props.img} alt={props.title}></img>
            <div className='detail'>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>
        </StyledContent>
    )
}