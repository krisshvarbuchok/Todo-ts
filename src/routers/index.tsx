import { JSX } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MainPage } from "../pages/MainPage"

export const RouterComponent = (): JSX.Element => {
    return (
        <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            {/* <Route path='/signUp' element={<SignUpForm />} /> */}
            {/* <Route path='/logIn' element={<LogInForm />} /> */}
            {/* <Route path="/authenticated" element={<AuthenticatedComponent />} /> */}
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    )
}