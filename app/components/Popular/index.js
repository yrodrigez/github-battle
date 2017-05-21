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
                                    <img className="avatar" src={repo.owner.avatar_url}/>
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


export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: []
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang) {
        fetchPopularRepos(lang)
            .then(repos => {
                this.setState(()=>({selectedLanguage: lang, repos: repos}))
            })
    }

    render() {
        let languages = ['All', 'Javascript', 'Lisp', 'Java', 'C++', 'Python'];

        return (
            <div>
                <ul className="languages">
                    {languages.map((language) => {
                        return (
                            <li
                                onClick={this.updateLanguage.bind(null, language)}
                                key={language}
                                style={language === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                            >
                                {language}
                            </li>
                        )
                    })}
                </ul>
                {!this.state.repos ? 'LOADING': <RepoGrid repos={this.state.repos}/>}
            </div>
        );
    }
}