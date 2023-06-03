import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">React Chat</span>
            <div className="user">
                <img src="https://cdn.pixabay.com/photo/2016/12/04/02/01/celtic-woman-1880944__340.jpg" alt="woman" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}
