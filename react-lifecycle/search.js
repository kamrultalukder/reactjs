var TestLifecycle = React.createClass({
    getInitialState: function(){
        console.log('getInitialState');
        return {
            role: 'Developer',
            company: 'ABC'
        }
    },

    getDefaultProps: function(){
        console.log('getDefaultProps');
        return {
            name: 'Kamrul'
        }
    },

    componentWillMount: function(){
        console.log('componentWillMount');
    },

    componentDidMount: function(){
        console.log('componentDidMount');
    },

    shouldComponentUpdate: function(nextProps, nextState){
        return true;
    },

    componentWillUpdate: function(nextProps, nextState){
        console.log('componentWillUpdate');
    },

    componentDidUpdate: function(prevProps, prevState){
        console.log('componentDidUpdate');
    },

    triggerChange: function(e){
        this.setState({
            role: e.target.value
        });
    },

    render: function(){
        console.log('render');
        return (
          <div className="Company">
              <h3>{this.props.name}</h3>
              <h3>{this.state.role}</h3>
              <h3>{this.state.company}</h3>
              <p>
                  <input
                    type="text"
                    onChange={this.triggerChange}
                    value={this.state.role}
                  />
              </p>
          </div>
        );
    }
});

ReactDOM.render(
    <TestLifecycle name={'kamrul'}/>,
    document.getElementById('content')
);