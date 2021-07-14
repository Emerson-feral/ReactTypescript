import React, { useEffect, useState } from 'react';
import { Button, Input, List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../redux/reducers';
import {
  loadTasks, addTask, deleteTask, toggleTask
} from '../../redux/actions/actionCreators';

const Lista = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector((store:Store) => store.tasks);
  const newId = tasksList.length + 1;

  useEffect(() => {
    if (!tasksList.length)dispatch(loadTasks());
  }, []);

  const [task, setTask] = useState('');

  function saveTask(id:Number, toDo:String):void {
    dispatch(addTask(id, toDo));
  }

  function activeToggle(idTask:Number) {
    dispatch(toggleTask(idTask));
  }

  return (
    <>
      <Input type="text" onChange={(e) => setTask(e.target.value)} />
      <Button variant="contained" size="small" color="primary" type="button" onClick={() => saveTask(newId, task)}>Add task</Button>
      <List>

        <ul>
          {
        tasksList?.map((item:any) => (
          <li onClick={() => activeToggle(item.id)} role="presentation" key={item.id}>
            {item.task}
            {' '}
            <button type="button" onClick={() => dispatch(deleteTask(item.id))}>delete</button>
          </li>
        ))
      }
        </ul>
      </List>
    </>
  );
};

export default Lista;
