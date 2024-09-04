import React from 'react';

const Dialog = function({ prompt, updateGameState }) {
    const containerStyle = {
    };

    const labelStyle = {
        position: 'absolute',
        bottom: '210px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border,
        display: 'flex',
        padding: '0px',
        //margin: 'auto'
    };

    const dialogBoxStyle = {
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
        fontSize: 'large'
    };

    function goToNextScreen() {
        updateGameState(prompt.nextScreen);
    }

    return (
        <div id="dialog-container" style={containerStyle}>
            <div className="label-container" style={labelStyle}>
                {prompt.label}
            </div>
            <div className="dialog-box" style={dialogBoxStyle}>
                <p style={prompt.content.style}>{prompt.content.text}</p>
                <button id="next-button" style={nextButtonStyle} onClick={goToNextScreen}>
                    next
                </button>
            </div>
        </div>
    );
};

export default Dialog;