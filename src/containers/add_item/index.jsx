import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../../actions/index';

import styled from 'styled-components';


class AddItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newList: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            newList: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state.newList);
        this.setState({ newList: '' });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text"
                        value={this.state.newList}
                        onChange={this.onInputChange}/>
                </form>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddItem);