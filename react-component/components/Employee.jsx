import React from 'react';

var Employee = React.createClass({
    render: function(){
        var name = this.props.search.trim();
        var employees = this.props.data.map(function(employee){
            if(name != '' && name != employee.name){
                return;
            }
            return (
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                </tr>
            );
        });

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    {employees}
                </tbody>
            </table>
        );
    }
});

export default Employee;
