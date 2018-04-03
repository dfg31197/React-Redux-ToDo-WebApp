const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const RENEW_TODO = 'RENEW_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const FILTER = 'FILTER'
const SET_STATE = 'SET_STATE'
const STATUS = {
    done: 'DONE',
    active: 'ACTIVE'
}
const SET_STATUS = 'SET_STATUS'
const DISPLAY = {
  all:'ALL',
  done: STATUS.done,
  active: STATUS.active
}
export {ADD_TODO,EDIT_TODO,REMOVE_TODO,RENEW_TODO,DELETE_TODO,STATUS,DISPLAY,FILTER,SET_STATUS,SET_STATE}

export function initializeState({state}){
return{
  type: SET_STATE,
  state
}
}

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
export function setStatus({id,status}){

  return{
    type: SET_STATUS,
    id,
    status
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
export function editTodo({id,time,content}){
  return {
    type: EDIT_TODO,
    id,
    time,
    content
  }
}
export function deleteTodo({id}){
  return {
    type: DELETE_TODO,
    id
  }
}
