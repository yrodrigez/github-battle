import React, {Component} from 'react';
require('./index.css');

export default class CuteSpinner extends Component{
    render() {
        return (
            <div className="spinner">
                <div className="cube1"/>
                <div className="cube2"/>
            </div>
        );
    }
}