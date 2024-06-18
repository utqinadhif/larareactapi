import React from "react"
import { Navigate, Route, NavLink, HashRouter } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="text-red-500">react joss</div>
            {/* <Navigate to="/about" replace={true} /> */}
        </>
    )
}

export default Index
