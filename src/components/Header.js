import React from 'react'
import {addTodo} from '../actions/actions.js'
import {connect} from 'react-redux'
class Header extends React.Component{
  state = {
    inputVal:""
  }

  handleInput = (e) =>{
    this.setState({
      inputVal: e.target.value
    })
  }

  add = () =>{
    console.log(this.state.inputVal)
  }

  enterKey = (e)=>{
    if(e.keyCode === 13 && this.state.inputVal.length>0){
      const time = `${new Date()}`.split(" ").filter((a,index)=> index == 0 || index == 4).join(", ")
      this.props.dispatch(addTodo({
        time,
        id: `${Date.now()}`,
        content: this.state.inputVal
      }))
      this.setState({inputVal:""})
    }

  }
  render(){
    return <div className = "header">
    <input placeholder="What needs to be done?" className="input-field" name="todo" onKeyDown={this.enterKey} onChange={this.handleInput} value={this.state.inputVal} />
    </div>
  }
}

const mapStateToProps = (state,own)=>state
export default connect(mapStateToProps)(Header)
