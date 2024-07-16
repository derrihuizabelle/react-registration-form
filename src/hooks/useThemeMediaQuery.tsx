import { useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const useThemeMediaQuery = () => {
  const { theme, setTheme } = useGlobalContext();

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useThemeMediaQuery;
