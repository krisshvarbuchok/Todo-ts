import { FC } from "react"
import styles from "./index.module.css"
import { Link } from "react-router-dom"

export const HomePage: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <h1>Hello!</h1>
                <nav >
                    <div className={styles.link}>
                        I've already had an account <Link to='/mainPage' className={styles.link}>Log In</Link>
                    </div>
                    <div className={styles.link}>
                        I don't have any account <Link to='/mainPage' className={styles.link}>Sing Up</Link>
                    </div>

                </nav>
            </div>
        </div>
    )
}