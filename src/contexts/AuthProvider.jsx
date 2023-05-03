/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebaseConfig'
import { setLogLevel } from 'firebase/app';

export const AuthContext = createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const registerUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
      return  signOut(auth)
    }

    const updateUserProfile = (user,name,photoUrl)=>{
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
        .then(()=>{
            console.log('user name updated')
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedInUser=>{
            setUser(loggedInUser)
            setLoading(false)
        });

        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {registerUser, user, updateUserProfile, logOut, logInUser, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;