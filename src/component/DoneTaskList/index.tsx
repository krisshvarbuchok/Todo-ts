import { Typography } from "antd";
import { FC } from "react"
type PropsType = {
    id: string | number;
    task: string;
    handleClickDone:  (id: number | string)=> void;
    doneTasks: (string | number)[];
}
export const DoneTaskList: FC<PropsType> = ({handleClickDone, id, task, doneTasks}) => {
    const { Text } = Typography;

    return (
        <p className='input-task' onClick={() => handleClickDone(id)}>
            {doneTasks.includes(id) ? <Text delete>{task}</Text> : task}
        </p>
    )
}