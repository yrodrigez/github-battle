import React, {Component} from 'react';
import ReactDom from 'react-dom';
require('./index.css');

class App extends Component{
    render(){
        return(
            <div>
                Hello dev server!
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);