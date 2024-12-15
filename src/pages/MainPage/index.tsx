import { FC, useEffect } from "react";
import styles from './index.module.css'
import { AddTaskList } from "../../component/AddTaskList";
import { TaskList } from "../../component/TaskList";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchGetTodos } from "../../redux/slices/todoListSlice";



export const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(fetchGetTodos());        
    }, [dispatch])
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