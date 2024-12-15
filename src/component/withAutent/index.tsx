import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>): FC<P> => {
    const withAuth: FC<P> = (props) => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated !== undefined && isAuthenticated !== null) {
            console.log(isAuthenticated);
            return <WrappedComponent {...props} />;
        } else {
            return <div>
                <p className={styles.warning}>Please log in to access this content <br />
                    <Link to='/logIn' className={styles.link}>Log In</Link></p>
            </div>
        }
    };
    return withAuth;
};

export default withAuth;