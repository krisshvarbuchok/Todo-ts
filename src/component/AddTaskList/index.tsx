import { FC, KeyboardEvent } from "react";
import { Button, Input } from "antd";
import styles from "./index.module.css"
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/actions/addNewTaskAction";
import { addTask } from "../../redux/actions/addTaskAction";
import { useAppSelector } from "../../hooks/hooks";


export const AddTaskList: FC = () => {
    const dispatch = useDispatch();
    const task = useAppSelector(state => state.task.task)
    const handleClick = ()=>{
        if(!!task.trim()){
            dispatch(addNewTask({task:task, id: crypto.randomUUID()}))
            dispatch(addTask(''))
          }
      }
      const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter' && task.trim()){
          dispatch(addNewTask({task:task, id: crypto.randomUUID()}))
          dispatch(addTask(''))
        }
      }

    return (
        <div className={styles.inputWithButton} >
            <Input placeholder="What is the task today?" value={task} onChange={(e) => dispatch(addTask(e.target.value))}
                onKeyDown={handleKeyDown} />
            <Button type="primary" className={styles.buttonAddTask} onClick={handleClick}>Add task</Button>
        </div>
    )
}