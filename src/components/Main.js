import React from 'react'
import {connect} from 'react-redux'
import {addTodo,completeTodo,reNew} from '../actions/actions.js'
class Main extends React.Component{
  render(){
    return (<div className="to-do-container">
    this.props.todo && this.props.todo.map((todo)=>(
      <Todo >
    ))
    </div>)
  }
}

const mapStateToProps = (state)=>{
  return state
}
export default connect(mapStateToProps)(Main)
