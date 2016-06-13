import React from 'react';

var AddEmployee = React.createClass({
    getInitialState: function(){
        return {
            name: '',
            designation: ''
        }
    },

    changeName: function(e){
        this.setState({
            name: e.target.value
        });
    },

    changeDesignation: function(e){
        this.setState({
            designation: e.target.value
        });
    },

    handleSubmit: function(e){
        e.preventDefault();
        var name = this.state.name.trim();
        var designation = this.state.designation.trim();
        this.props.onAddEmployee({name: name, designation: designation});

    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.changeName}
                />
                <input
                    type="text"
                    placeholder="Enter designation"
                    value={this.state.designation}
                    onChange={this.changeDesignation}
                />
                <input
                    type="submit"
                    value="Add"
                />
            </form>
        );
    }
});


export default AddEmployee;
