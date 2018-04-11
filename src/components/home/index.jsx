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
    padding: 0;
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

    getLists(lists) {
        return lists.map(listItem => {
            const url = `/list/${listItem.id}`;
            return (
                <Link to={url} key={listItem.id}>
                    <ListItem>{listItem.title}</ListItem>
                </Link>
            );
        })
    }
    
    render() {
        if(this.props.render !== false) {
            return (
                <List>
                    {this.getLists(this.state.lists)}
                </List>
            )
        } else {
            return (
                <h1>Not going to render</h1>
            )
        }
    }
}