import React from 'react'

class Timer extends React.Component{
  state= {
    time: ''
  }
  counter = ''
  componentDidMount(){
    this.counter = setInterval(()=>{this.setState({time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`})},1000)
  }

  componentWillUnmount(){
    clearInterval(this.counter)
  }
  render(){
    return <span className="timer">{this.state.time || "Insert racist statement here"}</span>
  }
}
export default Timer;
