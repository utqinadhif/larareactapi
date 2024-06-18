import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { LoginResponse, UserResponse } from '../Interface/Login'

const Login = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [token, setToken] = React.useState<string>('')

    React.useEffect(() => {
        document.title = 'Joss'
        setToken(localStorage.getItem('token') ?? '')
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        axios.post<LoginResponse>('/api/login', {
            email,
            password
        })
            .then(function (response) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getToken = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        axios.get<UserResponse>('/api/user', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Navbar />
            <div className="text-red-500">react login</div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value)
                }} />
                <input type="password" name="password" id="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value)
                }} />
                <input type="submit" value="login" />
            </form>
            <a href="#" onClick={getToken}>coba</a>
        </>
    )
}

export default Login
