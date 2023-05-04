import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = {name:'juyel'}
    const userInfo={
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;