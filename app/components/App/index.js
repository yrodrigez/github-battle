import React, {Component} from 'react';
import {ReactRouter, Route, Switch, HashRouter} from 'react-router-dom';

import Popular from '../Popular';
import Home from '../Home';
import Nav from '../Nav';

require('./index.css');

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{background: '#2c3e50'}}>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/popular" component={Popular}/>

                        <Route render={function(){return <h1>Not found</h1>} }/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}