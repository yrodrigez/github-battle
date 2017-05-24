/**
 * Created by y_rod on 24/05/2017.
 */
import React, {Component} from 'react';
require('./index.css');

import { Link } from 'react-router-dom';

export default class Home extends Component{
    render() {
        return(
            <div className="home-container">
                <h1>Battle your friends!!!</h1>
                <Link to="/battle" className="button" >
                    Battle
                </Link>
            </div>
        );
    }
}
