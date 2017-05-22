import React, {Component} from 'react';
require('./index.css');

export default class LanguageSelector extends Component{
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
        return(
            <ul className="languages">
                {languages.map((language) => {
                    return (
                        <li
                            onClick={this.props.onClick.bind(null, language)}
                            key={language}
                            style={
                                language === this.props.selectedLanguage
                                    ? {color: '#aca7a6'}
                                    : null
                            }
                        >
                            {language}
                        </li>
                    )
                })}
            </ul>
        );
    }
}
