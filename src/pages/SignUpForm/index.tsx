import styles from './index.module.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, lazy, Suspense, JSX } from 'react';
import { addNewUser } from '../../redux/slices/newUserSlice';
import { NewUserType, usersApi } from '../../api/usersAPI';
const ModalWindow = lazy(() => import("../../component/Modal/index"));

const SignUpForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<NewUserType>();

    const fetchRegistration = async (data: NewUserType) => {
        try {
            await usersApi.register(data)
            dispatch(addNewUser(data));
            setIsModal(true);
        }
        catch (err) {
            console.error("Registration failed:", err);
        }
    }

    const onSubmit = (data: NewUserType): void => {
        fetchRegistration(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.container} >
                    <label className={styles.text}>username:</label>
                    <div>
                        <input className={styles.input} {...register('username', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^[А-Яа-яЁёA-Za-z0-9]+$/,
                                message: 'неверное имя',
                            }
                        })} />
                        <p className={styles.warning}>{errors.username?.message}</p>
                    </div>
                </div>
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
                        <input className={styles.input} {...register('password', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: 'Минимум 1 заглавная буква, 1 прописная, 1 число и 1 символ',
                            },
                            minLength: {
                                value: 8,
                                message: 'Пароль должен быть длиной не менее 8 символов'
                            }
                        })} />
                        <p className={styles.warning}>{errors.password?.message}</p>
                    </div>
                </div>
                <div className={styles.container} >
                    <label className={styles.text}>gender</label>
                    <div>
                        <label className={styles.radio}>
                            <input
                                type='radio'
                                {...register('gender', {
                                    required: 'выберите пол',
                                })}
                                value='female' />
                            Female
                        </label>
                        <label className={styles.radio}>
                            <input
                                type='radio'
                                {...register('gender', {
                                    required: 'выберите пол',
                                })}
                                value='male' />
                            Male
                        </label>
                    </div>
                </div>
                <div className={styles.container} >
                    <label className={styles.text}>age:</label>
                    <div>
                        <input className={styles.input} {...register('age', {
                            required: 'Обязательное поле',
                            pattern: {
                                value: /^\d+$/,
                                message: 'Введите целое число от 10 до 100',
                            }
                        })} />
                        <p className={styles.warning}>{errors.age?.message}</p>
                    </div>
                </div>

                <button type='submit' className={styles.button}>Sign Up</button>


            </form>
            {isModal ?
                <Suspense fallback={<div>...Loading...</div>}>
                    <ModalWindow />
                </Suspense> :
                null}
            <div className={styles.log}>
                Already have an account? <Link className={styles.log} to='/logIn'>Log In</Link>!
            </div>
        </>
    )
}
export default SignUpForm;