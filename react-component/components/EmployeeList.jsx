import React from 'react';
import $ from 'jquery';
import Employee from './Employee';

var EmployeeList = React.createClass({
    render: function(){
        return (
            <div className="employeeList">
                <Employee data={this.props.data} search={this.props.search}/>
            </div>
        );
    }
});

export default EmployeeList;