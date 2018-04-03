import React from 'react'
import {connect} from 'react-redux'

import {STATUS,addTodo,deleteTodo,completeTodo,reNew,setStatus,editTodo} from '../actions/actions.js'
class Todo extends React.Component{

state = {
  editing: false,
  insides: '',
  temp: ''
}
updateLocalStorage =()=>{
  console.log(this.props.store)
  localStorage.setItem("todos",JSON.stringify(this.props.store.todo))
}

delete = ()=>{
  const {id} = this.props.ownProps
  this.props.dispatch(deleteTodo({id}))
}

changeState = ()=>{
  let status = this.props.ownProps.status
  console.log(status)
  if(status == 'ACTIVE'){
    status = 'DONE'
  }else{
    status = 'ACTIVE'
  }
  console.log(status)
  const {id} = this.props.ownProps
  this.props.dispatch(setStatus({id,status}))
}

handleTextInput = (e)=>{
this.setState({insides:e.target.value})
}

editIt = (e) =>{
this.props.ownProps.status !== 'DONE' && this.setState({editing:true,insides:this.props.ownProps.content,temp:this.props.ownProps.content})

}

handleEnter = (e)=>{
  if(e.keyCode === 13){
    if(this.state.insides === this.state.temp){
      this.setState({editing:false})
    }else{
      const {id} = this.props.ownProps
      const time = `${new Date()}`.split(" ").filter((a,index)=> index == 0 || index == 4).join(", ")
      const content = this.state.insides
      this.props.dispatch(editTodo({id,time,content}))
      this.setState({editing:false})
    }
  }

  if(e.keyCode === 27){
    this.setState({editing:false})
  }
}
render(){
  this.updateLocalStorage()
  const active = "col m3 s12 to-do"
  const done = `${active} strike`
  return (
    this.state.editing
    ?
    <div onDoubleClick={(e)=>{this.editIt(e)}} className={this.props.ownProps.status === "DONE"?done:active}>
  <p className="to-do-header">{this.props.ownProps.time} <span className="to-do-delete" onClick={this.delete}>x</span><span className="to-do-edit" onClick={this.changeState}>o</span></p>
  <textarea autoFocus className="edit-text" onChange={(e)=>{this.handleTextInput(e)}}onKeyDown={(e)=>{this.handleEnter(e)}} value={this.state.insides}/></div>
    :
    <div onDoubleClick={(e)=>{this.editIt(e)}} className={this.props.ownProps.status === "DONE"?done:active}>
  <p className="to-do-header">{this.props.ownProps.time} <span className="to-do-delete" onClick={this.delete}>x</span><span className="to-do-edit" onClick={this.changeState}>o</span></p>
  <span className="user-content">{this.props.ownProps.content}</span>

  </div>)
}
}
const mapStateToProps = (state,ownProps) =>{
  return {
    store: state,
    ownProps
  }
}
export default connect(mapStateToProps)(Todo)
