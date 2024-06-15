import React from "react"
import { Navigate, Route, NavLink, HashRouter } from "react-router-dom"

const Index = () => {
    return (
        <>
            <div className="text-red-500">react joss</div>
            <NavLink to="/about">About</NavLink>
            {/* <Navigate to="/about" replace={true} /> */}
        </>
    )
}

export default Index
