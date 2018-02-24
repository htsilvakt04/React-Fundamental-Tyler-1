let React = require('react');

class BattleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        let value = event.target.value;
        this.setState({
            textValue: value
        });
    }
    render () {
        const id = this.props.id;
        const textValue = this.state.textValue;
        return (
            <form onSubmit={this.props.onSubmit.bind(null, [id, textValue])}>
                <input type="text" value={this.state.textValue} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Text: '',
            player2Text: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (data, event) {
        event.preventDefault();
        let textValue = data[1];
        data[0] === 'player-1'
            ? this.setState({player1Text: textValue})
            : this.setState({player2Text: textValue});

    }
    render () {
        return (
            <div>
                <BattleForm id='player-1' onSubmit={this.handleSubmit}/>
                <BattleForm id='player-2' onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

module.exports = Battle;