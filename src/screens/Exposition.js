import React from 'react';

const Exposition = function({ prompt, updateGameState }) {
    const containerStyle = {
        position: 'relative', // Ensure the container covers the entire screen for click events
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center', // Center the dialog box horizontally
        alignItems: 'flex-end', // Align the dialog box at the bottom
        cursor: 'pointer' // Indicate that the screen is clickable
    };

    const dialogBoxStyle = {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border
        textAlign: 'center', // Center text horizontally within the dialog box
        padding: '10px',
        width: 'fit-content', // Optional: Adjust width or use fit-content
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    function goToNextScreen() {
        updateGameState(prompt.nextScreen);
    }

    return (
        <div id="exposition-container" style={containerStyle} onClick={goToNextScreen}>
            <div className="dialog-box" style={dialogBoxStyle}>
                <p style={prompt.content.style}>{prompt.content.text}</p>
            </div>
        </div>
    );
};

export default Exposition;

