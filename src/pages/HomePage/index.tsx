import { FC } from "react"
import styles from "./index.module.css"
import { Link, useNavigate } from "react-router-dom"

export const HomePage: FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/list')
    }
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <h1>Hello!</h1>
                <nav >
                    <div className={styles.link}>
                        I've already had an account <Link to='/logIn' className={styles.link}>Log In</Link>
                    </div>
                    <div className={styles.link}>
                        I don't have any account <Link to='/signUp' className={styles.link}>Sing Up</Link>
                    </div>

                </nav>
                <button onClick={handleClick}>list users</button>
            </div>
        </div>
    )
}