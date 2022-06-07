import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    updatePassword
  } from 'firebase/auth'
import { useState } from "react";
import Link from 'next/link'
import { useEffect } from "react";

const UserPanel = () => {
   
const [usernameError, setUsernameError] = useState(null)
const [photoError, setPhotoError] = useState(null)
const [emailError, setEmailError] = useState(null)
const [passwordError, setPasswordError] = useState(null)
const [success, setSuccess] = useState(false)
const [screenLoading, setScreenLoading] = useState(false)
const firebaseConfig = {
    apiKey: "AIzaSyClBmYjWTD4D-a5GR9tKEVnkzpqAM3H3Ps",
    authDomain: "jaydenhu-33683.firebaseapp.com",
    projectId: "jaydenhu-33683",
    storageBucket: "jaydenhu-33683.appspot.com",
    messagingSenderId: "807526322828",
    appId: "1:807526322828:web:e9f192f995f8cd9dede1a9"
  };
initializeApp(firebaseConfig);  
const auth = getAuth();
const user = auth.currentUser;

    return (
            <div className="absolute right-2 top-[60px] bg-[#121212] border-2 text-white border-red-500 rounded-md w-[400px] z-[99999]">
            <div className="ml-5 mr-5">
                <h1 className="text-center mt-2 mb-3">User Info</h1>
                <p className="mb-1">Username: {user.displayName}</p>
                <p className="mb-1">Email: {user.email}</p>
                <p className="mb-1">Profile picture: {user.photoURL}</p>
                <p className="mb-1">User created: {user.metadata.creationTime}</p>
                <p className="mb-1">Last login: {user.metadata.lastSignInTime}</p>
                <p className="mb-1">Provider: {user.providerId}</p>
                <p className="mb-1">User ID: {user.uid}</p>
            </div>
            <h1 className="text-center mt-2 mb-3">Update user</h1>
            <form className="userOptForm text-center">
                <label>Display name:</label><br />
                <input className="mt-5 text-black" type="text" name="username"/><br />
                {usernameError && usernameError}
        
                <label>Profile picture (link):</label><br />
                <input className="mt-5 text-black" type="text" name="photo"/><br />
                {photoError && photoError}
        
                <label>Email:</label><br />
                <input className="mt-5 text-black" type="text" name="email"/><br />
                {emailError && emailError}
        
                <label>Password:</label><br />
                <input className="mt-5 mb-5 text-black" type="password" name="password"/><br />
                {passwordError && passwordError}
        
                <button className="mb-5 bg-red-500 outline-none pop-out rounded-md p-2" onClick={(e) => 
                {
                    const userOptform = document.querySelector('.userOptForm')
                    e.preventDefault();
                    if(userOptform.username.value != ""){
                        updateProfile(auth.currentUser, {
                            displayName: userOptform.username.value,
                        })
                        .then(() => {
                            userOptform.reset()
                            setSuccess(true)
                            setTimeout(() => {
                                setSuccess(false)
                            }, 2000)
                          }).catch((err) => {
                            setUsernameError(err)
                          });
                    }
                    if(userOptform.photo.value != ""){
                        updateProfile(auth.currentUser, {
                            photoURL: userOptform.photo.value,
                        })
                        .then(() => {
                            userOptform.reset()
                            setSuccess(true)
                            setTimeout(() => {
                                setSuccess(false)
                            }, 2000)
                          }).catch((err) => {
                            setPhotoError(err)
                          });
                    }
                    if(userOptform.email.value != ""){
                        updateEmail(auth.currentUser, userOptform.email.value)
                        .then(() => {
                            userOptform.reset()
                            setSuccess(true)
                            setTimeout(() => {
                                setSuccess(false)
                            }, 2000)
                          }).catch((err) => {
                            setPasswordError(err)
                          });
                    }
                    if(userOptform.password.value != ""){
                        updatePassword(auth.currentUser, userOptform.password.value)
                        .then(() => {
                            userOptform.reset()
                            setSuccess(true)
                            setTimeout(() => {
                                setSuccess(false)
                            }, 2000)
                          }).catch((err) => {
                            setEmailError(err)
                          });
                    }
        
                }}>Update</button><br />
                {success && <div className="text-green-500 mb-5">Updated!</div>}
            <Link href="/admin"><button className="mb-5 bg-red-500 outline-none pop-out rounded-md p-2">Admin</button></Link><br />     
            <button className='mb-5 bg-red-500 outline-none pop-out rounded-md p-2'
            onClick={() => {
                signOut(auth)
                .then(() => {
                    setLogout(false)
                    router.push('/login')
                })
                    .catch(err => {
                    console.log(err.message)
                })
            }
            }>Logout</button>
            </form>
            </div>
    );
}
 
export default UserPanel;