let React = require('react');
let PropType = require('prop-types');

function SelectLanguage (props) {
    const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS'];

    return (
        <ul className='languages'>
            {languages.map(lang => {
                return (
                    <li className={props.selectedLanguage === lang ? 'selected' : ''}
                        onClick={props.onClick.bind(null, lang)} key={lang}>{lang}</li>
                )
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropType.string.isRequired,
    onClick: PropType.func.isRequired
};

module.exports = SelectLanguage;