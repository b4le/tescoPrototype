import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


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

class Home extends Component {
    getLists() {
        return this.props.lists.map(listItem => {
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
                    {this.getLists()}
                </List>
            )
        } else {
            return (
                <h1>Not going to render</h1>
            )
        }
    }
}

function mapStateToProps({lists}) {
    return { lists };
}

export default connect(mapStateToProps)(Home);
export { Home as TestHome };