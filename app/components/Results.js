let React = require('react');
let QueryParser = require('query-string');
let api = require('../utils/api');
let PropTypes = require('prop-types');
let Link = require('react-router-dom').Link;
let DisplayPlayerInfo = require('./DisplayPlayerInfo');

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }
    componentDidMount () {
        let searchQuery = QueryParser.parse(this.props.location.search);
        let usersArray = [searchQuery.playerOneName, searchQuery.playerTwoName];
        api.battle(usersArray)
            .then(data => {
                    if (data === null) {
                        return this.setState({
                            error: 'There are some errs, please check if user has existed or not',
                            loading: false
                        });
                    }

                    this.setState(() => {
                        let playerOne = data[0];
                        let playerTwo = data[1];
                        return {
                            winner: playerOne,
                            loser: playerTwo,
                            loading: false,
                            error: null
                        }
                    });
            }).catch(error => {
                this.setState({
                    error: true,
                    loading: false
                });
            });
    }
    render () {
        let winner = this.state.winner;
        let loser = this.state.loser;
        let error = this.state.error;
        let loading = this.state.loading;

        if (loading || error) {
            return loading ? (<li>Loading...</li>) : (<p>{this.state.error}</p>);
        }
        return (
            <div className='row'>
                <DisplayPlayerInfo label='Winner' score={winner.score} profile={winner.profile}/>
                <DisplayPlayerInfo label='Loser' score={loser.score} profile={loser.profile}/>
            </div>
        );
    }
}

module.exports = Results;
