import React, { createContext, useState, useContext } from 'react';

interface GlobalContextType {
    theme: string;
    toggleTheme: () => void;
    data: object;
    setData: React.Dispatch<React.SetStateAction<object>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => { 
    const [theme, setTheme] = useState('light');
    const [data, setData] = useState({});

    const toggleTheme = () => {
        console.log("oi prevtheme", theme)
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    console.log("data", data)

    return (
        <GlobalContext.Provider value={{ theme, data, toggleTheme, setData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};