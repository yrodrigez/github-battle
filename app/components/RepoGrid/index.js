import React, {Component} from 'react';
require('./index.css');

export default class RepoGrid extends Component {
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