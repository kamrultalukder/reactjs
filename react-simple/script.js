var SetIntervalMixin = {
    getElaspedTime: function() {
        setInterval.apply(null, arguments);
    }
};

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

    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render('<span>RawHtml:&nbsp;Kamrul&nbsp;Islam</span>span>');
        return { __html: rawMarkup };
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
              <Search onSubmitSearch={this.setSearchState} search={this.state.search}/>
              <br/>
              <strong>Employee List:</strong>
              <EmployeeList data={this.state.data} search={this.state.search}/>
              <br/>
              <strong>Add New Employee:</strong>
              <AddEmployee url={this.props.url} onAddEmployee={this.addEmployeeToServer}/>
              <div dangerouslySetInnerHTML={this.rawMarkup()} />
              <p>Application started since: {this.state.elaspedTime}s</p>
          </div>
        );
    }
});

var Search = React.createClass({
    changeSearch: function(e){
        this.setState({
            search: e.target.value
        });
    },
    handleSubmit: function(e){
        e.preventDefault();
        var search = this.state.search.trim();
        this.props.onSubmitSearch(search);
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter keyword"
                    defaultValue={this.props.search}
                    onChange={this.changeSearch}
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
        );
    }
});

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
                value="Search"
                />
            </form>
            );
    }
});

var EmployeeList = React.createClass({
    render: function(){
        return (
            <div className="employeeList">
                <Employee data={this.props.data} search={this.props.search}/>
            </div>
        );
    }
});

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

var data = [
    {id: 1, name: 'Mynul Khan', designation: 'CEO'},
    {id: 2, name: 'Nazmul Basher', designation: 'HOD'}
];

ReactDOM.render(
    <Company url={'http://localhost/react-simple/data.php'}/>,
    document.getElementById('content')
);