import React, { createContext, useState, useContext } from 'react';

interface GlobalContextType {
  theme: string;
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const [theme, setTheme] = useState(systemPrefersDark ? 'dark' : 'light');
  const [data, setData] = useState({});

  return (
    <GlobalContext.Provider value={{ theme, setTheme, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
