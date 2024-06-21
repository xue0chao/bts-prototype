import React from 'react';

const Dialog = function({ prompt, updateGameState }) {
    const containerStyle = {
        display: 'flex',
    };

    const labelStyle = {
        position: 'absolute',
        bottom: '220px',
        right: '0px',
        width: 'fit-content',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
        borderRadius: '5px',
        border: '10px solid black', // Solid black border,
        display: 'flex',
        padding: '20px'
    };

    const dialogBoxStyle = {
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        width: '100vw - 20px',
        height: '200px',
        //margin: '0 8%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '10px solid black', // Solid black border
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        padding: '0px'
      };

    const nextButtonStyle = {
        position: 'absolute',
        bottom: '50px',
        right: '50px',
        padding: '10px 20px',
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