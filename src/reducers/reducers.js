import {ADD_TODO,REMOVE_TODO,RENEW_TODO,DELETE_TODO,STATUS,FILTER} from '../actions/actions.js'
const initState = {
  todo:[
    {id: '12345',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'},
    {id: '123456',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'},
    {id: '123457',
    time: 'testing',
    status: 'DONE',
    content: 'testing here'},
    {id: '123458',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'},
    {id: '1234532',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'},
    {id: '12345613',
    time: 'testing',
    status: 'DONE',
    content: 'testing here'},
    {id: '1234513417',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'},
    {id: '1234415258',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'},

    {id: '123459',
    time: 'testing',
    status: 'ACTIVE',
    content: 'testing here'}
  ],
  display:'ALL'
}

const toDos = (state=initState,payload)=>{
  const {id,time,status,content} = payload
  switch(payload.type){
    case ADD_TODO:
    return {
      ...state,
      todo: [{
        id,
        time,
        status,
        content
      },
      ...state.todo,
    ]
    }
    case DELETE_TODO:
    return {...state,
      todo: state.todo.filter((a)=> a.id !== id)
    }

    case FILTER:
    return {
      ...state,
      display: payload.display
    }
    

    default:
    return state
  }
}

export default toDos;
