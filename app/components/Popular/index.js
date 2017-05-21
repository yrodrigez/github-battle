import React, {Component} from 'react';
require('./index.css');

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(() => {
            return {selectedLanguage: lang}
        })
    }

    render() {
        let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
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
        );
    }
}

module.exports = Popular;