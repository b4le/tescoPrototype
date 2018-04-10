import React, { Component } from 'react';
import styled from 'styled-components';

import Link from 'react-router-dom/Link'

const ListItem = styled.li`
    color: #ddd;
    font-size: 2rem;
    width: 100%;
    text-decoration: none;
    border: 1px solid #ddd;
`;

const List = styled.ul`
    list-style: none;
`;

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lists : [
                {
                    "id": "1",
                    "title": "First List"
                },
                {
                    "id": "2",
                    "title": "Second List"
                },
                {
                    "id": "3",
                    "title": "Third List"
                }
            ]
        }
    }

    getLists() {
        return this.state.lists.map(listItem => {
            const url = `/list/${listItem.id}`;
            return (
                <ListItem key={listItem.id}>
                    <Link to={url}>{listItem.title}</Link>
                </ListItem>
            );
        })
    }
    
    render() {
        return (
            <List>
                {this.getLists()}
            </List>
        )
    }
}