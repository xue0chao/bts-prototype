import React from 'react';

const Dialog = function({ dialogs = [], updateGameState, nextScreen }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: '0px',
        width: '100%',
    };

    const labelContainerStyle = (side) => ({
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'left',
        fontStyle: 'italic',
        padding: '0px',
        marginBottom: '0px', // Space between label and dialog box
        width: 'fit-content', // Adjust width to fit content
        marginLeft: side === 'left' ? '20px' : 'auto',
        marginRight: side === 'right' ? '20px' : 'auto',
        alignSelf: side === 'left' ? 'flex-start' : 'flex-end', // Align based on side
    });

    const dialogContainerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack the label and dialog box vertically
        alignItems: 'flex-start', // Align items to the start of the container
        marginLeft: '20px', // Align with the dialog box
        marginBottom: '10px', // Space below the dialog container
    };

    const dialogBoxStyle = (side) => ({
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '5px',
        border: '1px solid grey',
        textAlign: 'center',
        padding: '0px',
        width: '33vw',
        overflowWrap: 'break-word',
        boxSizing: 'border-box',
        cursor: 'pointer',
        marginLeft: side === 'left' ? '20px' : 'auto',
        marginRight: side === 'right' ? '20px' : 'auto',
        alignSelf: side === 'left' ? 'flex-start' : 'flex-end', // Align based on side
    });

    // Function to navigate to the next screen when the container is clicked
    function goToNextScreen() {
        updateGameState(nextScreen);
    }

    return (
        <div id="dialog-container" style={containerStyle} onClick={goToNextScreen}>
            {dialogs.map((prompt, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: prompt.side === 'left' ? 'flex-start' : 'flex-end' }}>
                    <div style={labelContainerStyle(prompt.side)}>
                        {prompt.label}
                    </div>
                    <div className="dialog-box" style={dialogBoxStyle(prompt.side)}>
                        <p style={prompt.content.style}>{prompt.content.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dialog;
