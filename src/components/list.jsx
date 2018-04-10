import React, { Component } from 'react';

import Link from 'react-router-dom/Link'

class List extends Component {
    
    render() {
        return (
            <div>
                <Link className="link" to="/">Home </Link>
                List here!
            </div>
        )
    }
}

export default List;