import React from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const SearchTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class SearchPres extends React.Component {
    render() {
        return(
            <SearchTitle>Search the world's Data</SearchTitle>
        )
    }
}