// AppContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a generic context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
    return useContext(AppContext);
};

// Context provider component
export const AppProvider = ({ children }) => {
    // Define your shared state variables here
    const [receiptContext, setReceiptContext] = useState();

    // Value object containing shared state and functions
    const value = {
        receiptContext,
        setReceiptContext,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
