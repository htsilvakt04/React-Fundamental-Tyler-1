let React = require('react');
let PlayerReview = require('./PlayerReview');

function DisplayPlayerInfo (props) {
    return (
        <PlayerReview>
            <h2 className='header'>{props.label}</h2>
            <h3 className='score'>{props.score}</h3>
            <PlayerReview avatar={} username={} onReset={} id={}>

            </PlayerReview>
        </div>
    )
}

DisplayPlayerInfo.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
};

module.exports = DisplayPlayerInfo;