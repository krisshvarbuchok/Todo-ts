import { FC, useState } from "react";
import styles from './index.module.css'
import { AddTaskList } from "../../component/AddTaskList";
import { TaskList } from "../../component/TaskList";


const arr = [
    { id: 1, task: 'купить хлеб'},
    { id: 2, task: 'вычесать кота' },
    { id: 3, task: 'принять душ' }
  ];

 export type List = {
      id: string | number;
      task: string;
  }
export const MainPage: FC = () => {
    const [task, setTask] = useState<string>('');
    const [list, setList] = useState<List[]>(arr);
    const [newTask, setNewTask] = useState<string>('');

    return (
        <>
            <div className={styles.app}>
                <div className='app container'>
                    <h1>Get things done!</h1>

                    <AddTaskList task={task} setTask={setTask} setList={setList} setNewTask={setNewTask} />

                    <TaskList list={list} setList={setList} newTask={newTask} />

                </div>
            </div>
            {/* <LogOut /> */}
        </>
    )
}