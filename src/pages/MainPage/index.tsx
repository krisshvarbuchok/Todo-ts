import { FC } from "react";
import styles from './index.module.css'
import { AddTaskList } from "../../component/AddTaskList";
import { TaskList } from "../../component/TaskList";



export const MainPage: FC = () => {

    return (
        <>
            <div className={styles.app}>
                <div className='app container'>
                    <h1>Get things done!</h1>

                    <AddTaskList />

                    <TaskList />

                </div>
            </div>
            {/* <LogOut /> */}
        </>
    )
}