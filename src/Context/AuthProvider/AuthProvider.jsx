import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import AuthContext from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    },[])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        updateUserProfile,
        user,
        loading,
        setLoading
    }


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;