import React from 'react';

const Dialog = function({ prompt, updateGameState }) {
    const dialogStyle = {
        position: 'relative',
        marginBottom: '0px'
    };

    function goToNextScreen() {
        updateGameState(prompt.nextScreen);
    }

    return (
        <div id="dialog-container" style={dialogStyle}>
            <div className="label-container">
                <div id="label">
                    {prompt.label}
                </div>
            </div>
            <div className="dialog-box">
                <p style={prompt.content.style}>{prompt.content.text}</p>
                <button id="next-button" onClick={goToNextScreen}>
                    next
                </button>
            </div>
        </div>
    );
};

export default Dialog;