import React, {Component} from 'react';
require('./index.css');
import {fetchPopularRepos} from '../../utils/api';

import CuteSpinner from '../CuteSpinner';
import RepoGrid from '../RepoGrid';


export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: undefined
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }


    updateLanguage(lang) {
        if( lang === this.state.selectedLanguage && this.state.selectedLanguage !== 'All') return;
        this.setState(() => ({selectedLanguage: lang, repos: undefined}));
        fetchPopularRepos(lang)
            .then(repos => {
                setTimeout(() => this.setState(() => ({repos: repos})), 1500)
            })

    }

    render() {
        let languages = [
            'All',
            'Javascript',
            'Lisp',
            'Java',
            'C++',
            'Python',
            'C',
            'Prolog',
            'php',
            'Assembly'
        ];
        return (
            <div>
                <ul className="languages">
                    {languages.map((language) => {
                        return (
                            <li
                                onClick={this.updateLanguage.bind(null, language)}
                                key={language}
                                style={language === this.state.selectedLanguage ? {color: '#aca7a6'} : null}
                            >
                                {language}
                            </li>
                        )
                    })}
                </ul>
                {!this.state.repos ? <CuteSpinner/> : <RepoGrid repos={this.state.repos}/>}
            </div>
        );
    }
}