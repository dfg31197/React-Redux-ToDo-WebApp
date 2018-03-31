import React from 'react'
import {connect} from 'react-redux'

import {STATUS,addTodo,deleteTodo,completeTodo,reNew,} from '../actions/actions.js'
class Todo extends React.Component{

delete = ()=>{
  const {id} = this.props
  this.props.dispatch(deleteTodo({id}))
}

render(){
  const active = "col m3 s12 to-do"
  const done = `${active} strike`
  return (<div className={this.props.status === "DONE"?done:active}>
  <p className="to-do-header">{this.props.time} <span className="to-do-delete" onClick={this.delete}>x</span><span className="to-do-edit" onClick={this.changeState}>o</span></p>
  <span>{this.props.content}</span>
  </div>)
}
}
const mapStateToProps = (state,ownProps) =>{
  return ownProps
}
export default connect(mapStateToProps)(Todo)
