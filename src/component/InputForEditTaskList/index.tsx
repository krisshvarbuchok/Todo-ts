import { Input, InputRef } from "antd";
import { useEffect, forwardRef, MutableRefObject } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { editTask } from "../../redux/slices/editTaskSlice";

type PropsType = {
    handleSave: (id: string) => void;
    id: string;
};

export const InputForEditTaskList = forwardRef<InputRef, PropsType>(
    ({ handleSave, id }, ref) => {
        const taskEdit = useAppSelector(state => state.taskEdit.taskEdit);
        const dispatch = useAppDispatch();
        useEffect(() => {
            if ((ref as MutableRefObject<InputRef | null>).current) {
                (ref as MutableRefObject<InputRef | null>).current?.focus();
              }
        }, []);

        return (
            <Input
                ref={ref}
                value={taskEdit}
                onChange={(e) => dispatch(editTask({taskEdit: e.target.value}))}
                onPressEnter={() => handleSave(id)}
            />
        );
    }
);