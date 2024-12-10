import { Input, InputRef } from "antd";
import { useEffect, forwardRef, MutableRefObject } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { editTask } from "../../redux/actions/editTaskAction";
import { useDispatch } from "react-redux";

type PropsType = {
    handleSave: (id: string | number) => void;
    id: number | string;
};

export const InputForEditTaskList = forwardRef<InputRef, PropsType>(
    ({ handleSave, id }, ref) => {
        const taskEdit = useAppSelector(state => state.taskEdit.taskEdit);
        const dispatch = useDispatch();
        useEffect(() => {
            if ((ref as MutableRefObject<InputRef | null>).current) {
                (ref as MutableRefObject<InputRef | null>).current?.focus();
              }
        }, []);

        return (
            <Input
                ref={ref}
                value={taskEdit}
                onChange={(e) => dispatch(editTask(e.target.value))}
                onPressEnter={() => handleSave(id)}
            />
        );
    }
);