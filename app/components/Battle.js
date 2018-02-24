let React = require('react');
let PropTypes = require('prop-types');
let BattleForm = require('./BattleForm');
let api = require('../utils/api');
let PlayerReview = require('./PlayerReview');

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
    handleReset () {
        console.log('handle reset function');
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
                        <PlayerReview id={'playerOne'} avatar={playerOneImg} username={playerOneName} onReset={this.handleReset} />
                    }

                    {!playerTwoName &&
                        <BattleForm id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>}
                    {playerTwoImg !== null &&
                    <PlayerReview id={'playerTwo'} avatar={playerTwoImg} username={playerTwoName} onReset={this.handleReset} />
                    }
                </div>
            </div>
        );
    }
}

module.exports = Battle;