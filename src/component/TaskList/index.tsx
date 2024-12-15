import { FC, useRef } from "react";
import { DeleteTaskList } from "../DeleteTaskList";
import { DoneTaskList } from "../DoneTaskList";
import styles from "./index.module.css"
import { InputForEditTaskList } from "../InputForEditTaskList";
import { EditTaskList } from "../EditTaskList";
import { WillEditTaskList } from "../WillEditTaskList";
import { InputRef } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchDeleteTask, fetchEditIsCompleted, fetchEditTask } from "../../redux/slices/todoListSlice";
import { editIdTask } from "../../redux/slices/editIdSlice";
import { editTask } from "../../redux/slices/editTaskSlice";
import { isCompletedFunction } from "../../helper/isCompleted";

export const TaskList: FC = () => {

    const list = useAppSelector(state => state.list.list);    
    const editId = useAppSelector(state => state.editId.editId);
    const taskEdit = useAppSelector(state => state.taskEdit.taskEdit);
    const dispatch = useAppDispatch();
    const ref = useRef<InputRef>(null);


    const handleSave = (id: string) => {
        if (taskEdit.trim() !== '') {
            dispatch(fetchEditTask({ id, title: taskEdit }))
            dispatch(editIdTask({ editId: '' }));
            dispatch(editTask({ taskEdit: '' }))

        }
    }
    const handleEdit = (id: string, task: string): void => {
        dispatch(editIdTask({ editId: id }));
        dispatch(editTask({ taskEdit: task }));
    }

    const handleClickDone = (id: string): void => {
        if (list !== null) {
            dispatch(fetchEditIsCompleted({ id, isCompleted: !isCompletedFunction(list, id) }));
        }
    }

    const handleClickDelete = (id: string): void => {
        dispatch(fetchDeleteTask(id));
    }
    return (
        <ul>
            {list?.map((item) => {
                return (<li key={item.id} className={styles.task}>

                    <div className={styles.inputTask}>
                        {editId === item.id ?
                            <InputForEditTaskList
                                ref={ref}
                                handleSave={handleSave} id={item.id} /> :

                            <DoneTaskList
                                handleClickDone={handleClickDone}
                                id={item.id} task={item.title} />
                        }
                    </div>
                    <div className={styles.buttonTask}>
                        {editId === item.id ?
                            <EditTaskList handleSave={handleSave} id={item.id} /> :
                            <WillEditTaskList handleEdit={handleEdit} id={item.id} task={item.title} />
                        }

                        <DeleteTaskList handleClickDelete={handleClickDelete} id={item.id} />
                    </div>

                </li>)

            })}

        </ul>

    )
}