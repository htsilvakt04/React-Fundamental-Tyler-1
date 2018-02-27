let React = require('react');
let PropTypes = require('prop-types');

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }

    componentDidMount () {
        let stopper = this.props.text + '...';

        this.interval = window.setInterval(function () {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                })
            } else {
                this.setState(prevState => {
                   return {
                       text: prevState.text + '.'
                   }
                });
            }
        }.bind(this), this.props.intervalTime);
    }

    componentWillUnmount () {
        window.clearInterval(this.interval);
    }

    render () {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    intervalTime: PropTypes.number.isRequired,
};

Loading.defaultProps = {
    text: 'Loading',
    intervalTime: 250
};

module.exports = Loading;