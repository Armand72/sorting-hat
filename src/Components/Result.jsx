import React, { Component } from 'react';
import {connect} from 'react-redux'
import Message from './../Containers/Message'

const action = {
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    indexSelected: Math.floor(Math.random()  *  4)
}
this.props.dispatch(action)

class Result extends Component {
    constructor(props){
        setInterval(() =>  this.props.dispatch({ type:  '' }), 1000)
        super(props)
    }
    render() { 
        return ( 
        <div>
            <ul>
            {this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
            </ul>
            <Message  message={this.props.selectedHouses}  />
        </div> 
        );
    }
}

export default connect (store => store) (Result)

