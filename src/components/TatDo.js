import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Register } from "./auth/register"
import { Login } from "./auth/login"
import { NavBar } from "./Nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./TatDo.css"

export const TatDo = () => (
    <>
        <Route
        render={() => {
            if (sessionStorage.getItem("tatdo_user")) {
                return (
                    <>
                        <NavBar />
                        <ApplicationViews />
                    </>
                )
            } else {
                return <Redirect to="/login" />;
            }
        }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)