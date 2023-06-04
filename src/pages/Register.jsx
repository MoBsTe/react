import React from 'react'
import Add from '../img/addAvatar.png'
import { auth, storage, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName, // displayName:displayName
                            email,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {})
                        e.target[0].value = '';
                        e.target[1].value = '';
                        e.target[2].value = '';
                        e.target[3].files[0] = null;
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                })
            })
            console.log(res);
        } catch (err) {
            setErr(true);
        }

    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" id="file" style={{ display: 'none' }} />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span> Something went wrong</span>}
                </form>
                <p>You have an account? <Link to="/login">Login</Link> </p>
            </div>
        </div>
    )
}

export default Register