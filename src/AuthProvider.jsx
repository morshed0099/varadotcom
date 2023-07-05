import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.init';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'


export const userAuth = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(false)

    const auth = getAuth(app)
    const googleAuth = new GoogleAuthProvider()
    const facebookAuth = new FacebookAuthProvider()

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const singWithEmail=(email,passwoord)=>{
        return signInWithEmailAndPassword(auth,email,passwoord)
    }

    const createuserGoogle = () => {
        return signInWithPopup(auth, googleAuth)
    }

    const createuserFacebook = () => {
        return signInWithPopup(auth, facebookAuth)
    }

    const logout=()=>{
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe()
    }, [auth])

    const userIfo = {
        user,
        loader,
        setLoader,
        setUser,
        createUserWithEmail,
        updateUser,
        createuserGoogle,
        createuserFacebook,
        logout,
        singWithEmail
    }

    return (
        <div>
            <userAuth.Provider value={userIfo}>
                {children}
            </userAuth.Provider>
        </div>
    );
};

export default AuthProvider;