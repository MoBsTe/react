import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">React Chat</span>
            <div className="user">
                <img src="" alt="woman" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}
