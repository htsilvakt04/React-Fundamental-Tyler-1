let PropTypes = require('prop-types');
let React = require('react');

const PlayerReview = (props) => {
    return (
        <div>
            <div className='column'>
                <img src={props.avatar} alt="User Avatar"/>
                <h2 className='username'>@{props.username}</h2>
            </div>
            <button onClick={props.onReset.bind(null,  props.id)} className='reset'>Reset</button>
        </div>
    );
};

PlayerReview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

module.exports = PlayerReview;