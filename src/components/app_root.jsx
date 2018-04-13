import React, { Component } from 'react';
import styled from 'styled-components';

import { renderRoutes } from 'react-router-config';

import AddItem from '../containers/add_item/index.jsx';

const Wrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`

class AppRoot extends Component {
    render() {
        return (
            <Wrapper>
                <AddItem/>
                {renderRoutes(this.props.route.routes)}
            </Wrapper>
        )
    }
}

export default AppRoot;