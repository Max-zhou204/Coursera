import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

function useTheme() {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export {useTheme, ThemeProvider};
