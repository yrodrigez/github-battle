import React, {Component} from 'react';
require('./index.css');
import {fetchPopularRepos} from '../../utils/api';

import CuteSpinner from '../CuteSpinner';
import RepoGrid from '../RepoGrid';
import LanguageSelector from '../LanguageSelector';

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
        if (lang === this.state.selectedLanguage && lang !== 'ALL') return;
        this.setState(() => ({selectedLanguage: lang, repos: undefined}));
        fetchPopularRepos(lang)
            .then(repos => {
                setTimeout(() => this.setState(() => ({repos: repos})), 1500)
            })

    }

    render() {
        return (
            <div>
                <LanguageSelector selectedLanguage={ this.state.selectedLanguage } onClick={ this.updateLanguage }/>
                {!this.state.repos ? <CuteSpinner/> : <RepoGrid repos={this.state.repos}/>}
            </div>
        );
    }
}