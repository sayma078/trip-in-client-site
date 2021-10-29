import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loginUser, setLoginUser] = useState();
    return (
        <AuthContext.Provider value= {[loginUser, setLoginUser]}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;