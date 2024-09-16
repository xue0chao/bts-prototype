import React from 'react';

const Choice = function({ prompt, updateGameState }) {

    // Style for the main container aligned at the bottom of the screen
    const containerStyle = {
        position: 'absolute',
        bottom: '0', // Aligns the container to the bottom
        left: '50%',
        transform: 'translateX(-50%)', // Center the container horizontally
        display: 'flex',
        flexDirection: 'column', // Stack choices vertically
        alignItems: 'center', // Center choices horizontally
        paddingBottom: '20px', // Adds some padding from the bottom of the screen
    };

    // Style for the question displayed above the choices
    const questionStyle = {
        marginBottom: '20px', // Adds spacing between the question and the choices
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border
        textAlign: 'center', // Center text horizontally within the dialog box
        padding: '10px',
        width: 'fit-content',
    };

    // Style for each choice button
    const choiceStyle = {
        marginBottom: '10px', // Adds spacing between buttons
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        borderRadius: '5px',
        border: '5px solid black', // Solid black border
        textAlign: 'center', // Center text horizontally
        padding: '10px',
        width: '200px', // Fixed width to make the buttons uniform
        height: '50px', // Fixed height for consistency
        cursor: 'pointer', // Changes the cursor to a pointer on hover
    };

    function getGoToScreen(option) {
        return function() {
            updateGameState(option.screen);
        };
    }

    return (
        <div id="choice-container" style={containerStyle}>
            <div id="prompt-question" style={questionStyle}>
                { prompt.question }
            </div>
            { 
                prompt.choices.map(function(option) {
                    return (
                        <button 
                            key={option.id} 
                            className="choice-option" 
                            id={option.id} 
                            onClick={getGoToScreen(option)} 
                            style={choiceStyle}
                        > 
                            {option.text}
                        </button>
                    );
                }) 
            }
        </div>
    );
}

export default Choice;
