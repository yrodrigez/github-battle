import React, {Component} from 'react';
import {ReactRouter, Route, Router, HashRouter} from 'react-router-dom';

import Popular from '../Popular';
import Nav from '../Nav';

require('./index.css');

export default class App extends Component {
    render() {
        return (
            <HashRouter >
                <div style={{background: '#2c3e50'}}>
                    <Nav/>
                    <Route path="/popular" component={Popular}/>
                </div>
            </HashRouter>
        );
    }
}