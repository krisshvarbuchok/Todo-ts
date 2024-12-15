import { Typography } from "antd";
import { FC } from "react"
import { useAppSelector } from "../../hooks/hooks";
import { isCompletedFunction } from "../../helper/isCompleted";
type PropsType = {
    id: string ;
    task: string;
    handleClickDone:  (id: string, task: string)=> void;
}
export const DoneTaskList: FC<PropsType> = ({handleClickDone, id, task}) => {
    const { Text } = Typography;
    const list = useAppSelector(state => state.list.list);
    return (
        <p className='input-task' onClick={() => handleClickDone(id, task)}>
            {list !== null && isCompletedFunction(list, id) ? <Text delete>{task}</Text>  : task}
        </p>
    )
}