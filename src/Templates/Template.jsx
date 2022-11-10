import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class Template extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-3'>
                    <div className='item-left'>
                        <nav className="nav flex-column">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        </nav>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='item-right border border-info border-3'>
                        <Outlet />
                    </div>
                </div>
            </div>
        )
    }
}
