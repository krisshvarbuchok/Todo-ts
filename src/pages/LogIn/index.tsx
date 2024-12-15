import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { UserAutent, usersApi } from '../../api/usersAPI';



const LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserAutent>();
    const navigate = useNavigate();

    const onSubmit = async (data: UserAutent): Promise<void> => {
        try {
            const response = await usersApi.autent(data);
            const token = response.data.token; // Доступ к токену
            if (token) {
                localStorage.setItem('token', token); // Сохранение токена
                console.log('Авторизация успешна:', response);
                navigate('/authenticated'); // Редирект
            } else {
                console.error('Токен отсутствует в ответе:', response);
            }
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.message) {
                console.error('Ошибка авторизации:', err.response.data.message);
                alert(err.response.data.message); // Показываем сообщение пользователю
            } else {
                console.error('Неизвестная ошибка:', err);
                alert('Произошла ошибка при авторизации. Попробуйте снова.');
            }
        }
    };
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.container} >
                    <label className={styles.text}>email:</label>
                    <div>
                        <input className={styles.input} {...register('email', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^[A-Za-z0-9-_.%+&]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: 'Введите валидный email',
                            }
                        })} />
                        <p className={styles.warning}>{errors.email?.message}</p>
                    </div>
                </div>
                <div className={styles.container} >
                    <label className={styles.text}>password:</label>
                    <div>
                        <input type="password" className={styles.input} {...register('password', {
                            required: 'Обязательное поле',
                        })} />
                        <p className={styles.warning}>{errors.password?.message}</p>
                    </div>
                </div>

                <button type='submit' className={styles.button}>Log In</button>

            </form>
            <div className={styles.sign}>
                Don't have an account? <Link className={styles.sign} to='/signUp'>Sign Up</Link>!
            </div>
        </>
    )
}
export default LogInForm;