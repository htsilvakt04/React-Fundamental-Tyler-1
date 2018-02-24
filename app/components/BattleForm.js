let React = require('react');

let PropTypes = require('prop-types');

class BattleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
        let value = event.target.value;
        this.setState({
            textValue: value
        });
    }
    handleSubmit (event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.textValue);
    }
    render () {
        const id = this.props.id;
        const textValue = this.state.textValue;
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor={id}>{this.props.label}</label>
                <input type="text" id={id} value={this.state.textValue} onChange={this.handleChange} autoComplete='off'/>
                <button className='button' type="submit" disabled={!this.state.textValue}>Submit</button>
            </form>
        )
    }
}

BattleForm.propTypes = {
    id: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

module.exports = BattleForm;