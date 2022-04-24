import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/articles">Articles</NavLink>
            </li>
            </ul>
        </nav>
    )
}