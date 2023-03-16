import React, { useContext, useEffect } from 'react';
import { auth, googleAuth } from '../firebaseConfig';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function loginWithGoogle() {
        const provider = googleAuth;
        return auth.signInWithPopup(provider);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            //not loading will render the children
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // children will have access to these methods
    const value = {
        currentUser,
        signUp,
        login,
        loginWithGoogle,
        logout,
    };

    return (
        !loading && (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
    );
}
