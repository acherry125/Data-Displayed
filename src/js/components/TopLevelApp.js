import React from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default class TopLevelApp extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Data Displayed</Title>
            </Wrapper>
        )
    }
}