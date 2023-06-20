import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const registerUserWithGoogleId = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const registerUserWithGmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLoggedOut = () => {
        return signOut()
    }
    const userUpdateName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }



    // Firebase pre-build user state manageable data
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])
    const provideContexts = {
        registerUserWithGoogleId,
        registerUserWithGmailPass,
        userLoggedOut,
        userUpdateName,
        user,
    }
    return (
        <AuthContext.Provider value={provideContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;