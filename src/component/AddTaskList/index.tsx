import { FC, KeyboardEvent } from "react";
import { Button, Input } from "antd";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchPostTodos } from "../../redux/slices/todoListSlice";
import { addTask } from "../../redux/slices/addTaskSlice";


export const AddTaskList: FC = () => {
  const dispatch = useAppDispatch();
  const task = useAppSelector(state => state.task.task)
  const handleClick = (): void => {
    if (!!task.trim()) {
      dispatch(fetchPostTodos(task));
      dispatch(addTask({task: ''}));
    }
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && task.trim()) {
      dispatch(fetchPostTodos(task));
      dispatch(addTask({task: ''}));
    }
  }

  return (
    <div className={styles.inputWithButton} >
      <Input placeholder="What is the task today?" value={task} onChange={(e) => dispatch(addTask({task: e.target.value}))}
        onKeyDown={handleKeyDown} />
      <Button type="primary" className={styles.buttonAddTask} onClick={handleClick}>Add task</Button>
    </div>
  )
}