import React, { useContext, useEffect } from 'react';
import { auth } from '../firebaseConfig';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = React.useState();
    const [loading, setLoading] = React.useState(true);

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const currentState = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            //not loading will render the children
            setLoading(false);
        });
        currentState();
    }, []);

    const value = {
        currentUser,
        signUp,
    };

    return (
        !loading && (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
    );
}
