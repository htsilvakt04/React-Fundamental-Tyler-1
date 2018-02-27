let React = require('react');
let PropTypes = require('prop-types');
let BattleForm = require('./BattleForm');
let api = require('../utils/api');
let PlayerReview = require('./PlayerReview');
let Link = require('react-router-dom').Link;

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerOneImg: null,
            playerTwoName: '',
            playerTwoImg: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleReset (id, event) {
        console.log('xxx',id);

        this.setState(() => {
            let newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Img'] = null;
            return newState;
        });
    }
    handleSubmit (id, username) {
        this.setState(() => {
            let newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Img'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        });
    }

    render () {
        // current url come from the Router
        let matchUrl = this.props.match.url;

        let playerOneName = this.state.playerOneName;
        let playerOneImg = this.state.playerOneImg;

        let playerTwoName = this.state.playerTwoName;
        let playerTwoImg = this.state.playerTwoImg;

        return (
            <div>
                <div className='row'>
                    {!playerOneName &&
                        <BattleForm id='playerOne' label='Player One' onSubmit={this.handleSubmit}/>}
                    {playerOneImg !== null &&
                    <PlayerReview avatar={playerOneImg} username={playerOneName}>
                        <button onClick={this.handleReset.bind(null, 'playerOne')} className='reset'>Reset</button>
                    </PlayerReview>}

                    {!playerTwoName &&
                        <BattleForm id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>}
                    {playerTwoImg !== null &&
                        <PlayerReview avatar={playerTwoImg} username={playerTwoName}>
                            <button onClick={this.handleReset.bind(null, 'playerTwo')} className='reset'>Reset</button>
                        </PlayerReview>}
                </div>
                {playerOneImg && playerTwoImg &&
                    <Link className='button' to={{
                        pathname: matchUrl + '/results',
                        search: `?playerOneName=` + playerOneName + '&playerTwoName=' + playerTwoName
                    }}>Battle</Link>
                }
            </div>
        );
    }
}

module.exports = Battle;