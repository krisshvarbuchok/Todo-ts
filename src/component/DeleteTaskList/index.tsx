import { Button, Popconfirm } from "antd";
import { FC } from "react";
import { DeleteOutlined } from '@ant-design/icons';

type PropsType = {
    id: string | number;
    handleClickDelete: (id: string | number) => void;
}
export const DeleteTaskList: FC<PropsType> = ({ handleClickDelete, id }) => {

    return (
        <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No" onConfirm={() => handleClickDelete(id)}>
            <Button type="primary" danger ghost className='button-in-task'><DeleteOutlined style={{ fontSize: '20px' }} /></Button>
        </Popconfirm>
    )
}