import list from '../../mock/tasksmock';
import actionTypes from './actionTypes';

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS,
    tasks: list
  };
}

export function addTask(newId:number, data:string) {
  return {
    type: actionTypes.ADD_TASK,
    task: { id: newId, task: data, marked: false }
  };
}

export function deleteTask(taskId:Number) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}

export function toggleTask(id:Number) {
  return {
    type: actionTypes.ACTIVE_TOGGLE,
    id
  };
}
