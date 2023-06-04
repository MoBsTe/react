import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';
import { signOut } from '@firebase/auth';
import { auth } from '../firebase';;

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="navbar">
            <span className="logo">React Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="woman" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}
