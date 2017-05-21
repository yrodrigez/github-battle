import React, {Component} from 'react';
import Popular from '../Popular';

require('./index.css');

class App extends Component{
    render(){
        return(
            <div>
               <Popular/>
            </div>
        );
    }
}

module.exports = App;