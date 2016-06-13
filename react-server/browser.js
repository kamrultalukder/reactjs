var React = require('react'),
ReactDOM = require('react-dom'),

App = React.createFactory(require('./App'))

ReactDOM.render(
    App(window.APP_PROPS),
    document.getElementById('content')
)
