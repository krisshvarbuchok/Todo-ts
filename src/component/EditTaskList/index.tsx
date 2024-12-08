import { Button } from "antd";
import { FC } from "react";
import { SaveOutlined} from '@ant-design/icons';
import styles from "./index.module.css"

type PropsType = {
    handleSave: (id: string | number, taskEdit: string) => void;
    id: string | number;
    taskEdit: string;
}

export const EditTaskList: FC<PropsType> = ({handleSave, id, taskEdit }) => {
    return (
        <Button type="primary" className={styles.buttonInTask} ghost 
        onClick={() => handleSave(id, taskEdit)}><SaveOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
    )
}