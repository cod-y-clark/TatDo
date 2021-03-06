import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css"

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ name: "", email: "", password: ""})
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {

        return fetch(`http://localhost:8088/users?email=${registerUser.password}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: registerUser.name,
                            email: registerUser.email,
                            password: registerUser.password
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem("tatdo_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Create An Account</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required autoFocus value={registerUser.name} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required autoFocus value={registerUser.email} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" required autoFocus value={registerUser.password} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <button type="submit"> Create Account </button>
                </fieldset>
            </form>
        </main>
    )
}