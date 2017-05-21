import React, {Component} from 'react';
require('./index.css');
import {fetchPopularRepos} from '../../utils/api';


class RepoGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="popular-list">
                {this.props.repos.map((repo, index) => {
                    return (
                        <li key={repo.name} className="popular-item">
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items">
                                <li>
                                    <a href={repo.html_url}>
                                        <img className="avatar" src={repo.owner.avatar_url}/>
                                    </a>
                                </li>
                                <li><a href={repo.html_url}>{repo.name}</a></li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count} stars</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

class CuteSpinner extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="cube1"/>
                <div className="cube2"/>
            </div>
        );
    }
}

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
        this.setState(() => ({selectedLanguage: lang, repos: undefined}));
        fetchPopularRepos(lang)
            .then(repos => {
                setTimeout(() => this.setState(() => ({repos: repos})), 1500)
            })

    }

    render() {
        let languages = ['All', 'Javascript', 'Lisp', 'Java', 'C++', 'Python', 'C', 'Prolog', 'php'];
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