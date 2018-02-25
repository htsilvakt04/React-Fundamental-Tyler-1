let React = require('react');

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                {this.props.location.search}
            </div>
        );
    }
}

module.exports = Results;
