var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            name: this.props.name
        }
    },

    handleChange: function(e) {
        this.setState({
            name: e.target.value
        })
    },

    render: function() {
        return (
            React.createElement('div', null,
                React.createElement('p', null, 'Name: '+this.state.name),
                React.createElement('input', {onChange: this.handleChange, value: this.state.name, placeholder: 'Enter name'})
            )
        );
    }
})