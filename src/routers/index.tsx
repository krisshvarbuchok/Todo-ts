import { JSX } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MainPage } from "../pages/MainPage"
import { UserComponent } from "../component/Users"
import SignUpForm from "../pages/SignUpForm"
import LogInForm from "../pages/LogIn"
import withAuth from "../component/withAutent"


const AuthenticatedComponent = withAuth(MainPage);

export const RouterComponent = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signUp' element={<SignUpForm />} />
            <Route path='/logIn' element={<LogInForm />} />
            <Route path="/authenticated" element={<AuthenticatedComponent />} />
            {/* <Route path="/mainPage" element={<MainPage />} /> */}
            <Route path="*" element={<HomePage />} />
            <Route path="/list" element={<UserComponent />} />
        </Routes>
    )
}