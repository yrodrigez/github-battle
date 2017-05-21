import React, {Component} from 'react';
import Popular from '../Popular';

require('./index.css');

export default class App extends Component{
    render(){
        return(
            <div style={{background:'#2c3e50'}}>
               <Popular/>
            </div>
        );
    }
}