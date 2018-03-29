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
    if(e.keyCode === 13){
      this.props.dispatch(addTodo({
        time: new Date(),
        id: Date.now(),
        content: this.state.inputVal
      }))
      this.setState({inputVal:""})
    }

  }
  render(){
    return <div className = "header">
    <nav>
    <input className="input-field" name="todo" onKeyDown={this.enterKey} onChange={this.handleInput} value={this.state.inputVal} />

</nav>
    </div>
  }
}

const mapStateToProps = (state,own)=>state
export default connect(mapStateToProps)(Header)
