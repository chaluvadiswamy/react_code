import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ childern }) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {childern}
        </ThemeContext.Provider>
    )
}
