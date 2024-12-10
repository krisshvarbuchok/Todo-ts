import { FC, useRef } from "react";
import { DeleteTaskList } from "../DeleteTaskList";
import { DoneTaskList } from "../DoneTaskList";
import styles from "./index.module.css"
import { InputForEditTaskList } from "../InputForEditTaskList";
import { EditTaskList } from "../EditTaskList";
import { WillEditTaskList } from "../WillEditTaskList";
import { InputRef } from "antd";
import { useAppSelector } from "../../hooks/hooks";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions/deleteAction";
import { doneTask } from "../../redux/actions/doneAction";
import { editIdTask } from "../../redux/actions/editIdAction";
import { editTask } from "../../redux/actions/editTaskAction";
import { addEditedTask } from "../../redux/actions/addEditAction";

export const TaskList: FC = () => {
    
    const list = useAppSelector(state => state.list.list);
    const editId = useAppSelector(state => state.editId.editId);
    const taskEdit = useAppSelector(state => state.taskEdit.taskEdit);
    const dispatch = useDispatch();
    const ref = useRef<InputRef>(null);
    
    
    const handleSave = (id: string | number) => {
        if(taskEdit.trim() !== ''){
            dispatch(addEditedTask(id, taskEdit))
            dispatch(editIdTask(''));
            dispatch(editTask(''))
            
        }
    }
    const handleEdit = (id: string | number, task: string): void => {
        dispatch(editIdTask(id));
        dispatch(editTask(task));
    }

    const handleClickDone = (id: string | number): void => {
        dispatch(doneTask(id));
    }

    const handleClickDelete = (id: string | number): void => {
        dispatch(deleteTask(id));
    }
    return (
        <ul>

            {list.map((item) => {
                return (<li key={item.id} className={styles.task}>

                    <div className={styles.inputTask}>
                        {editId === item.id ?
                            <InputForEditTaskList
                                ref={ref} 
                                handleSave={handleSave} id={item.id} /> :

                            <DoneTaskList handleClickDone={handleClickDone} id={item.id} task={item.task} />
                        }
                    </div>
                    <div className={styles.buttonTask}>
                        {editId === item.id ?
                            <EditTaskList handleSave={handleSave} id={item.id}/> :
                            <WillEditTaskList handleEdit={handleEdit} id={item.id} task={item.task} />
                        }

                        <DeleteTaskList handleClickDelete={handleClickDelete} id={item.id} />
                    </div>

                </li>)

            })}

        </ul>

    )
}