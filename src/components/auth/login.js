import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css"

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ password: ""})
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?password=${loginUser.password}`)
        .then(res => res.json())
        .then(user => user.length ? user[0] : false )
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
        .then(exists => {
            if (exists) {
                sessionStorage.setItem("tatdo_user", exists.id)
                history.push("/")
            } else {
                setExistDialog(true)
            }
        })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>TatDo</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password</label>
                        <input type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required autoFocus
                            value={loginUser.password}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign In
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Create an account</Link>
            </section>
        </main>
    )
}