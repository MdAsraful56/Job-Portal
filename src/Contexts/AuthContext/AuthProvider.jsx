import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.init';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password, name, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    // setUser({ ...userCredential.user, displayName: name, photoURL: photo });
                });
            })
            .catch((error) => console.error(error));
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => setUser(result.user))
            .catch(console.error)
            .finally(() => setLoading(false));
    };


    const logout = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null); // Clear user state
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };





    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('User State Changed', currentUser );
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    } ,[])



    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleSignIn,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;