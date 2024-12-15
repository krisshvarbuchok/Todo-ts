import { JSX, useEffect, useState } from "react"
import { usersApi, UsersType } from "../../api/usersAPI";
import { useNavigate } from "react-router-dom";

export const UserComponent = ():JSX.Element =>{
    const navigate = useNavigate();
    const [users, setUsers] = useState<UsersType[] | null>(null);
    
    const fetchUsers = async() => {
        const responce = await usersApi.getUsers().then(res => res.data)
        setUsers(responce)
    }
    useEffect(() => {
        fetchUsers();
    }, [])
    const handleClick = () => {
        navigate('/')
    }
    return(
        <div className="container">
            <h2>Список студентов Redev</h2>
            <button onClick={handleClick}>come back</button>
            <table className='redevTable'>
                <thead >
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {users?.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.age}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}