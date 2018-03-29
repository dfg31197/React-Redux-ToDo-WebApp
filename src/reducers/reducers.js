import {ADD_TODO,REMOVE_TODO,RENEW_TODO,DELETE_TODO,STATUS} from '../actions/actions.js'
const initState = {
  todo:[
    {id: '12345',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'}
  ]
  display:'ALL'
}

const toDos = (state=initState,payload)=>{
  const {id,time,status,content} = payload
  switch(payload.type){
    case ADD_TODO:
    return {
      todo: [...state.todo,{
        id,
        time,
        status,
        content
      }]
    }
    case REMOVE_TODO:
    return {todo: state.todo.filter((a)=> a.id !== id)}
    default:
    return state
  }
}

export default toDos;
