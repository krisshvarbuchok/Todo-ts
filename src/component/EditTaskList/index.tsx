import { Button } from "antd";
import { FC } from "react";
import { SaveOutlined} from '@ant-design/icons';
import styles from "./index.module.css"

type PropsType = {
    handleSave: (id: string) => void;
    id: string;
}

export const EditTaskList: FC<PropsType> = ({handleSave, id }) => {
    return (
        <Button type="primary" className={styles.buttonInTask} ghost 
        onClick={() => handleSave(id)}><SaveOutlined style={{ fontSize: '20px', color: 'white' }} /></Button>
    )
}