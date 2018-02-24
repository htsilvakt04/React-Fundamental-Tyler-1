let React = require('react');
let SelectLanguage = require('./SelectLanguage');
let RepoGrid = require('./RepoGrid');
let api = require('../utils/api');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLang = this.updateLang.bind(this);
    }
    componentDidMount () {
        this.updateLang(this.state.selectedLanguage);
    }
    updateLang (lang) {
        this.setState(() => {
            return {
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then(repos => {
                this.setState(() => {
                    return {
                        selectedLanguage: lang,
                        repos: repos
                    }
                })
            });
    }
    render () {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onClick={this.updateLang}/>
                {!this.state.repos
                    ? <p className='loading'>Loading...</p>
                    : <RepoGrid repos={this.state.repos} />
                }
            </div>
        );
    }
}

module.exports = Popular;