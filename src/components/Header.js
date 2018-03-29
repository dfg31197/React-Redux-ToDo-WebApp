import React from 'react'

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
export default Header;
