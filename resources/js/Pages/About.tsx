import React from "react"
import { Navigate, Route, NavLink, HashRouter } from "react-router-dom"
import Navbar from "../Components/Navbar"

const About = () => {
    return (
        <>
            <Navbar />
            <div className="text-red-500">react about</div>
        </>
    )
}

export default About
