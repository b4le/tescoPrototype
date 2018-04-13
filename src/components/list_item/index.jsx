import React, { Component } from 'react';
import styled from 'styled-components';

import Link from 'react-router-dom/Link'

const StyledListItem = styled.li`
    color: #ddd;
    font-size: 2rem;
    width: 100%;
    text-decoration: none;
    border: 1px solid #ddd;
`;

const ListItem = (props) => {
    return (
        <StyledListItem>{props.children}</StyledListItem>
    )
}

export default ListItem;