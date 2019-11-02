import React, { Component } from 'react';

class Message  extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        console.log(this.props)
        return ( 
        <div>
            <b>{this.props.message}</b>
          
        </div> );
    }
}
 
export default Message;