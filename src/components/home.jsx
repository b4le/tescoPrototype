import React, { Component } from 'react';
import Router from 'react-router';

import Link from 'react-router-dom/Link'

export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                This is the home component
                <Link className="link" to="/list/1">List Number 1 </Link>
            </div>
        )
    }
}