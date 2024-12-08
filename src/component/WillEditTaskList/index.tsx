import { Button } from "antd";
import { FC } from "react";
import { EditOutlined } from '@ant-design/icons';
import styles from "./index.module.css"

type PropsType = {
    handleEdit: (id: string | number, task: string) => void;
    id: string | number;
    task: string;
}

export const WillEditTaskList: FC<PropsType> = ({handleEdit, id, task}) => {
    return (
        <Button type="primary" className={styles.buttonInTask} ghost 
        onClick={() => handleEdit(id, task)}><EditOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
        
    )
}