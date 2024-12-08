import { FC, useRef, useState } from "react";
import { List } from "../../pages/MainPage";
import { DeleteTaskList } from "../DeleteTaskList";
import { DoneTaskList } from "../DoneTaskList";
import styles from "./index.module.css"
import { InputForEditTaskList } from "../InputForEditTaskList";
import { EditTaskList } from "../EditTaskList";
import { WillEditTaskList } from "../WillEditTaskList";
import { InputRef } from "antd";

type PropsType = {
    list: List[];
    setList: (callback: (prev: List[]) => List[]) => void;
    newTask: string;
}
export const TaskList: FC<PropsType> = ({ list, setList }) => {

    const ref = useRef<InputRef>(null);
    const [doneTasks, setDoneTasks] = useState<(string | number)[]>([]);
    const [idEdit, setIdEdit] = useState<string | number | null>(null);
    const [taskEdit, setTaskEdit] = useState<string>('');

    const handleSave = (id: string | number, taskEdit: string) => {
        if(taskEdit.trim() !== ''){
            setList(prev =>
                prev.map(item => item.id === id ? { ...item, task: taskEdit } : item)
            );
            setIdEdit(null);
            setTaskEdit('');
        }
    }
    const handleEdit = (id: string | number, task: string): void => {
        setIdEdit(id);
        setTaskEdit(task);
        //textInput.current?.focus();
    }

    const handleClickDone = (id: string | number): void => {
        setDoneTasks(prevState => prevState.includes(id) ? prevState.filter(item => item !== id) : [...prevState, id]);
    }

    const handleClickDelete = (id: string | number): void => {
        setList(prev => prev.filter(task => task.id !== id));
    }
    return (
        <ul>

            {list.map((item) => {
                return (<li key={item.id} className={styles.task}>

                    <div className={styles.inputTask}>
                        {idEdit === item.id ?
                            <InputForEditTaskList
                                ref={ref} 
                                taskEdit={taskEdit} setTaskEdit={setTaskEdit} handleSave={handleSave} id={item.id} /> :

                            <DoneTaskList handleClickDone={handleClickDone} doneTasks={doneTasks} id={item.id} task={item.task} />
                        }
                    </div>
                    <div className={styles.buttonTask}>
                        {idEdit === item.id ?
                            <EditTaskList handleSave={handleSave} id={item.id} taskEdit={taskEdit}/> :
                            <WillEditTaskList handleEdit={handleEdit} id={item.id} task={item.task} />
                        }

                        <DeleteTaskList handleClickDelete={handleClickDelete} id={item.id} />
                    </div>

                </li>)

            })}

        </ul>

    )
}