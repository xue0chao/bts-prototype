import React from 'react';

const Dialog = function({ prompt, updateGameState, side }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack elements vertically
        alignItems: side === 'left' ? 'flex-start' : 'flex-end', // Align to the left or right
        position: 'absolute',
        bottom: '0px', // Keep the container at the bottom of the screen
        left: side === 'left' ? '0px' : 'auto', // Align container to the left or right
        right: side === 'right' ? '0px' : 'auto',
        marginLeft: side === 'left' ? '20px' : 'auto', // Add margin for the left side
        marginRight: side === 'right' ? '20px' : 'auto', // Add margin for the right side
        width: '100%', // Ensure the container takes the full width
    };

    const labelStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border
        textAlign: 'center', // Center text horizontally
        padding: '5px',
        marginBottom: '10px', // Adds space between the label and the dialog box
    };

    const dialogBoxStyle = {
        position: 'relative', // Set relative positioning
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border
        textAlign: 'center', // Center text horizontally within the dialog box
        padding: '0px',
        width: '33vw', // Set width to 1/3 of the screen
        overflowWrap: 'break-word', // Handle long words without breaking the layout
        boxSizing: 'border-box', // Ensure padding and border are included in the width
        cursor: 'pointer' // Add cursor pointer to indicate it's clickable
    };

    function goToNextScreen() {
        updateGameState(prompt.nextScreen);
    }

    return (
        <div id="dialog-container" style={containerStyle} onClick={goToNextScreen}>
            <div className="label-container" style={labelStyle}>
                {prompt.label}
            </div>
            <div className="dialog-box" style={dialogBoxStyle}>
                <p style={prompt.content.style}>{prompt.content.text}</p>
            </div>
        </div>
    );
};

export default Dialog;
