import React from 'react';

const Exposition = function({ prompt, updateGameState }) {
    const containerStyle = {
    };


    const dialogBoxStyle = {
        display: 'flex',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '0px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border
        textAlign: 'center', // Center text horizontally within the dialog box
        padding: '0px',
        width: 'fit-content', // Optional: Define width or use fit-content
        height: '80px',
        alignItems: 'center',
        justifyContent: 'center'
      };

    const nextButtonStyle = {
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        padding: '5px 5px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: 'medium'
    };

    function goToNextScreen() {
        updateGameState(prompt.nextScreen);
    }

    return (
        <div id="exposition-container" style={containerStyle}>
            <div className="dialog-box" style={dialogBoxStyle}>
                <p style={prompt.content.style}>{prompt.content.text}</p>
                <button id="next-button" style={nextButtonStyle} onClick={goToNextScreen}>
                    next
                </button>
            </div>
        </div>
    );
};

export default Exposition;