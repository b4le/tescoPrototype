import React, { Component } from 'react';
import styled from 'styled-components';

import Link from 'react-router-dom/Link'

const StyledLink = styled(Link)`
    color: red;
    font-size: 2rem;
    text-decoration: none;
`;

const Title = styled.h1`
  color: goldenrod;
`;


class List extends Component {
    
    render() {
        return (
            <div>
                <StyledLink to="/">Home</StyledLink>
                <Title>{this.props.match.params.listId} List here!</Title>
            </div>
        )
    }
}

export default List;