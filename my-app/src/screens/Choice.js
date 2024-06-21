import React from 'react';

const Choice = function({ prompt, updateGameState }) {
    const choiceStyle = {
        position: 'relative',
        marginBottom: '0px'
    };

    function getGoToScreen(option) {
        return function() {
            updateGameState(option.screen);
        };
    }

    return (
        <div id="choice-container" style={choiceStyle}>
            <div id="prompt-question">
                { prompt.question }
            </div>
            { 
                prompt.choices.map(function(option) {
                    return (
                        <button className="choice-option" id={option.id} onClick={getGoToScreen(option)}> 
                            {option.text}
                        </button>
                    );
                }) 
            }
        </div>
    );
}

export default Choice;