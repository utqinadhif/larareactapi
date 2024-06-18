import React from 'react'
import Navbar from '../Components/Navbar'

const Login = () => {
    const [username, setUsername] = React.useState<String>('')
    const [password, setPassword] = React.useState<String>('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        alert([username, password])
    }

    return (
        <>
            <Navbar />
            <div className="text-red-500">react login</div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUsername(event.target.value)
                }} />
                <input type="password" name="password" id="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value)
                }} />
                <input type="submit" value="login" />
            </form>
        </>
    )
}

export default Login
