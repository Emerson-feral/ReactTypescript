import actionTypes from '../actions/actionTypes';

function tasksReducer(tasks:any = [], action:any) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return action.tasks;

    case actionTypes.ADD_TASK:
      return [...tasks, action.task];

    case actionTypes.DELETE_TASK:
      return tasks.filter((item:any) => item.id !== action.taskId);

    case actionTypes.ACTIVE_TOGGLE:
      return tasks.map((item:any) => {
        if (item.id === action.id) {
          item.marked = !item.marked;
        }
        return item;
      });

    default:
      return tasks;
  }
}

export default tasksReducer;
