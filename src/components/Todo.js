import React from 'react'
import {connect} from 'react-redux'

import {STATUS,addTodo,completeTodo,reNew,} from '../actions/actions.js'
class Todo extends React.Component{

render(){
  const active = "col s6 to-do blue"
  const done = `${active} strike green`
  return (<div className={this.props.status === "DONE"?done:active}>

  <span>{this.props.content}</span>
  </div>)
}
}
const mapStateToProps = (state,ownProps) =>{
  return ownProps
}
export default connect(mapStateToProps)(Todo)
