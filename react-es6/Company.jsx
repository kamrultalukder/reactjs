import React from 'react';
import SpreadComponent from './SpreadComponent';
import { TimeMixin } from "./TimeComponent";

class Company extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            location: 'Uttara'
        }

        //we can define manual binding here and use only {this.changeType} on Change event
        //this.changeType = this.changeType.bind(this);
        //this.changeType = () => this.changeType();

        // Operations usually carried out in componentWillMount go here

        //this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    changeType(event){
        this.setState({
            location: event.target.value
        });
    }


    render() {
        return (
            <div className={this.props.className}>
                <strong>{this.props.name}</strong> (Location: {this.state.location})
                <br/><br/>
                Change Type:
                <input
                    type="text"
                    placeholder="Enter type"
                    onChange={this.changeType.bind(this)}
                    //can be used by following arrow function also
                    //onChange={(e) => this.changeType(e)}
                />
                <SpreadComponent {...this.props} className={"override"}/>

                <p className="large-12 column">
                    <strong>Time elasped since start: </strong>
                    {this.props.seconds}
                </p>

            </div>

        );
    }
}

Company.defaultProps = {
    name: 'Field Nation'
};

Company.propsTypes = {
    name: React.PropTypes.integer
};

export default TimeMixin(Company);