import { FC, KeyboardEvent } from "react";
import { List } from "../../pages/MainPage";
import { Button, Input } from "antd";
import styles from "./index.module.css"
type PropsType = {
    task: string;
    setList: (callback: (prev:List[]) => List[])=> void;
    setTask: (str: string)=> void;
    setNewTask: (str: string) => void;
}

export const AddTaskList: FC<PropsType> = ({task, setTask, setList, setNewTask}) => {
    const handleClick = ()=>{
        if(!!task.trim()){
            setNewTask(task);
            setList((prevItems) => [...prevItems, {task:task, id: crypto.randomUUID()}])
            setTask('')
          }
      }
      const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter' && task.trim()){
          setNewTask(task);
          setList((prevItems) => [...prevItems, {task:task, id: crypto.randomUUID()}])
          setTask('')
        }
      }

    return (
        <div className={styles.inputWithButton} >
            <Input placeholder="What is the task today?" value={task} onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown} />
            <Button type="primary" className={styles.buttonAddTask} onClick={handleClick}>Add task</Button>
        </div>
    )
}