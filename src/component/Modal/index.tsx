import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { JSX } from 'react';

const ModalWindow = (): JSX.Element => {
    const newUser = useAppSelector(state => state.newUser);

    return (
        <div className={styles.modalBackground}>
            <div className={styles.container}>
                <div className={styles.link}>
                    Пользователь {newUser.username} успешно зарегистрирован. Войдите в профиль:
                    <Link to='/logIn' className={styles.link}>Log In</Link>
                </div>
            </div>
        </div>
    )
}
export default ModalWindow;