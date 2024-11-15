import React, { useState } from 'react';
import Usercontext from './Usercontext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    return (
        <Usercontext.Provider   value={{ user, setUser }} >
            {children}
        </Usercontext.Provider>
    );
}

export default UserContextProvider;
