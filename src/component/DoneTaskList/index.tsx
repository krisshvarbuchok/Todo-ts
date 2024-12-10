import { Typography } from "antd";
import { FC } from "react"
import { useAppSelector } from "../../hooks/hooks";
type PropsType = {
    id: string | number;
    task: string;
    handleClickDone:  (id: number | string)=> void;
}
export const DoneTaskList: FC<PropsType> = ({handleClickDone, id, task}) => {
    const { Text } = Typography;
    const done = useAppSelector(state => state.done.done)

    return (
        <p className='input-task' onClick={() => handleClickDone(id)}>
            {done.includes(id) ? <Text delete>{task}</Text> : task}
        </p>
    )
}