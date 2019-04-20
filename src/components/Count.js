import React, { Component } from 'react';
import {connect} from 'react-redux';
import ActionType from './../actions/ActionType';
class Count extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onDecrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.onIncrement}>+</button> 
            </div>
        )
  }
}
const mapStateToProps = (state) => ({
    count: state.counter.count
})
const mapDispatchToProps = (dispath) =>({
    onIncrement : ()=>dispath({type: ActionType.INCREMENT}),
    onDecrement : ()=>dispath({type: ActionType.DECREMENT})
})

export default connect(mapStateToProps,mapDispatchToProps)(Count);