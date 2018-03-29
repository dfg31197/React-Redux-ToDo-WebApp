import React from 'react'
import {connect} from 'react-redux'
import {filterTodos} from '../actions/actions.js'

class Footer extends React.Component{
changeFilter = (fil) =>{
this.props.dispatch(filterTodos({display:fil}))
}
  render(){
    const filters = [
      {
        filter: 'ALL',
        text: 'Show All'
      },
      {
        filter: 'ACTIVE',
        text: 'Pending'
      },
      {
        filter: 'DONE',
        text: 'Completed'
      }
    ]
    return (<div>
    <nav className="footer-nav">
    {filters.map((fil)=>{
    return <button key={fil.filter} onClick={()=>{this.changeFilter(fil.filter)}} disabled={fil.filter === this.props.display} className="waves-effect waves-light btn-large">{fil.text}</button>
    })}
    </nav>
    </div>)
  }
}

const mapStateToProps = (state,own) =>{
return {display: state.display}
}
export default connect(mapStateToProps)(Footer)
