const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const RENEW_TODO = 'RENEW_TODO'
const DELETE_TODO = 'DELETE_TODO'
const FILTER = 'FILTER'
const STATUS = {
    done: 'DONE',
    active: 'ACTIVE'
}
const DISPLAY = {
  all:'ALL',
  done: STATUS.done,
  active: STATUS.active
}
export {ADD_TODO,REMOVE_TODO,RENEW_TODO,DELETE_TODO,STATUS,DISPLAY,FILTER}

export function addTodo({id,time,content}){
  return{
    type: ADD_TODO,
    id,
    time,
    content,
    status: STATUS.active
  }
}

export function completeTodo({id}){
  return {
    type: REMOVE_TODO,
    id,
    status: STATUS.done
  }
}

export function reNew({id,time}){
  return {
    type: RENEW_TODO,
    id,
    time,
    status: STATUS.active
  }
}

export function filterTodos({display}){
  return {
    type: FILTER,
    display
  }
}

export function deleteTodo({id}){
  return {
    type: DELETE_TODO,
    id
  }
}
