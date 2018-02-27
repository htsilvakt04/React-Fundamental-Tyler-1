let React = require('react');
let PlayerReview = require('./PlayerReview');
let PropTypes = require('prop-types');

function UserProfileFromGitHub (props) {
    let info = props.info;
    return (
        <PlayerReview avatar={props.info.avatar_url} username={props.info.login}>
            <ul className='space-list-items'>
                {info.name && <li>{info.name}</li>}
                {info.location && <li>{info.location}</li>}
                {info.company && <li>{info.company}</li>}
                <li>Followers: {info.followers}</li>
                <li>Following: {info.following}</li>
                <li>Public Repos: {info.public_repos}</li>
                {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
            </ul>
        </PlayerReview>
    );
}
UserProfileFromGitHub.propTypes = {
    info: PropTypes.object.isRequired
};
function DisplayPlayerInfo (props) {
    return (
        <div>
            <h2 className='header'>{props.label}</h2>
            <h3 className='score'>#{props.score}</h3>
            <UserProfileFromGitHub info={props.profile}/>
        </div>
    )
}

DisplayPlayerInfo.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
};

DisplayPlayerInfo.defaultProps = {
    label: 'Winner'
};

module.exports = DisplayPlayerInfo;