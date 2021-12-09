import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 80%;
    display: flex;
    margin: 0 auto;
    padding-left: 2%;
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.white};
`

export default function Header(props){
    return (
        <StyledHeader>
            <div className= 'header'>
                <h1><span role="img" aria-label='galaxy'>🌌</span> NASA app</h1>
            </div>
        </StyledHeader>
    )
}