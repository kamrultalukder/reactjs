import React from 'react';
import $ from 'jquery';
import Search from './Search';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import SetIntervalMixin from './SetIntervalMixin';

var Company = React.createClass({
    mixins: [SetIntervalMixin], // Use the mixin

    getInitialState: function(){
        return {
            data: [],
            search: '',
            elaspedTime: 0
        }
    },

    propTypes:{
        name: React.PropTypes.string
    },

    getDefaultProps: function(){
        return {
            name: 'Field Nation'
        };
    },

    componentDidMount: function(){
        this.getElaspedTime(this.tick, 1000); // Call a method on the mixin

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(exr, data, e){
            }.bind(this)
        });
    },

    setSearchState: function(search){
        this.setState({
            search: search
        });
    },

    addEmployeeToServer: function(employee){
        var data = this.state.data;
        data = data.concat(employee);
        this.setState({
            data: data
        });
        $.ajax({
            url: this.props.url,
            data: employee,
            dataType: 'json',
            method: 'post',
            cache: false,
            success: function(data){
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(exr, data, e){
            }.bind(this)
        });
    },

    tick: function() {
        this.setState({
            elaspedTime: this.state.elaspedTime + 1
        });
    },

    render: function(){
        return (
            <div className="Company">
                <h3>{this.props.name}</h3>
                <Search onSubmitSearch={this.setSearchState}/>
                <br/>
                <strong>Employee List:</strong>
                <EmployeeList data={this.state.data} search={this.state.search}/>
                <br/>
                <strong>Add New Employee:</strong>
                <AddEmployee url={this.props.url} onAddEmployee={this.addEmployeeToServer}/>
                <p>Application started since: {this.state.elaspedTime}s</p>
            </div>
        );
    }
});

export default Company;