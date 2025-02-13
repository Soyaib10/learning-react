import React from 'react';

function ThemedButton({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
            }}
        >
            Toggle Theme
        </button>
    );
}

export default ThemedButton;