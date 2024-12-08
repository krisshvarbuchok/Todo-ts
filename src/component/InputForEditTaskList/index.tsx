import { Input, InputRef } from "antd";
import { useEffect, forwardRef, MutableRefObject } from "react";

type PropsType = {
    taskEdit: string;
    setTaskEdit: (arg: string) => void;
    handleSave: (id: string | number, taskEdit: string) => void;
    id: number | string;
};

export const InputForEditTaskList = forwardRef<InputRef, PropsType>(
    ({ setTaskEdit, handleSave, id, taskEdit }, ref) => {
        useEffect(() => {
            if ((ref as MutableRefObject<InputRef | null>).current) {
                (ref as MutableRefObject<InputRef | null>).current?.focus();
              }
        }, []);

        return (
            <Input
                ref={ref}
                value={taskEdit}
                onChange={(e) => setTaskEdit(e.target.value)}
                onPressEnter={() => handleSave(id, taskEdit)}
            />
        );
    }
);