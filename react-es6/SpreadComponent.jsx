import React from 'react';
import DestComponent from './DestComponent';

class SpreadComponent extends React.Component {
    constructor(props){
        super(props);

        console.log(this.props);
    }

    render() {
        // others contains all properties of this.props except for className
        //var {className, ...others} = this.props;

        return (
            <div className={this.props.className}>
                {
                    //<DestComponent {...others}/>
                }
            </div>

        );
    }
}

export default SpreadComponent;