let PropTypes = require('prop-types');
let React = require('react');

function PlayerReview (props) {
    return (
        <div>
            <div className='column'>
                <img src={props.avatar} className='avatar' alt="User Avatar"/>
                <h2 className='username'>@{props.username}</h2>
            </div>
            {props.children}
        </div>
    );
}

PlayerReview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = PlayerReview;