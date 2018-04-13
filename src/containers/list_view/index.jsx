import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Link from 'react-router-dom/Link'

import ListItem from '../../components/list_item/index.jsx'



const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const StyledLink = styled(Link)`
    color: red;
    font-size: 2rem;
    text-decoration: none;
`;

class ListView extends Component {
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

    getItems() {
        return this.props.internalLists.map(listItem => {
            if (listItem.relatedList === this.props.match.params.listId) {
                return (
                    <ListItem key={listItem.id}>{listItem.title}</ListItem>
                );
            }
        })
    }
    
    render() {
        return (
            <React.Fragment>
                {this.props.match.params.listId ? <StyledLink to="/">Home</StyledLink> : null}
                <List>
                    {this.props.match.params.listId ? this.getItems() : this.getLists()}
                </List>
            </React.Fragment>
        )
    }
}

function mapStateToProps({lists, internalLists}) {
    return { lists, internalLists };
}

export default connect(mapStateToProps)(ListView);
export { ListView as TestListView };