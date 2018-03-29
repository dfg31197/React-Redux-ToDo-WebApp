import React from 'react'
import {DISPLAY} from '../actions/actions.js'
import {connect} from 'react-redux'
import Todo from './Todo'
import {addTodo,completeTodo,reNew} from '../actions/actions.js'
class Main extends React.Component{
  render(){
    return (<div className="to-do-container">
    {this.props.todo &&
      this.props.todo.length>0
      ? this.props.display === 'ALL'
      ? this.props.todo.map((todo)=>{
        return <Todo key={todo.id} content={todo.content} time={todo.time} status = {todo.status}/>
      })
      : this.props.todo.filter((todo)=> todo.status === this.props.display).map((todo)=>{
        return <Todo key={todo.id} content={todo.content} status={todo.status} time={todo.time}/>
      })
      : <h2>No todos yet</h2>
    }
    </div>)
  }
}

const mapStateToProps = (state)=>{
  return state
}
export default connect(mapStateToProps)(Main)
