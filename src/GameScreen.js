import React, { useState } from 'react';
import Choice from './screens/Choice';
import Dialog from './screens/Dialog';
import './GameScreen.css';

const GameScreen = function({ data }) {   
    const initialState = {
        backgroundImage: data.initial.assets.backgroundImage,
        characterImage: null,
        screenType: data.initial.type,
        prompt: data.initial.prompt
    };
    const [gameState, setGameState] = useState(initialState);

    function updateGameState(newStateName) {
        setGameState({
            backgroundImage: data[newStateName].assets.backgroundImage,
            characterImage: data[newStateName].assets.characterImage,
            screenType: data[newStateName].type,
            prompt: data[newStateName].prompt
        });
    }

    //placeholder until there's smarter CSS
    const IMAGE_SHRINK_FACTOR = 0.5;
    const BACKGROUND_WIDTH = 1792;
    const BACKGROUND_HEIGHT = 2699;
    const CHARACTER_WIDTH = 1000;
    const CHARACTER_HEIGHT = 2000;

    const gameScreenStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.backgroundImage})`,
        backgroundSize: `${BACKGROUND_HEIGHT * IMAGE_SHRINK_FACTOR}px ${BACKGROUND_WIDTH * IMAGE_SHRINK_FACTOR}px`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        width: `${BACKGROUND_WIDTH * IMAGE_SHRINK_FACTOR}px`,
        height: `${BACKGROUND_HEIGHT * IMAGE_SHRINK_FACTOR}px`
    };

    const characterContainerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.characterImage})`,
        backgroundSize: `${CHARACTER_HEIGHT * IMAGE_SHRINK_FACTOR}px ${CHARACTER_WIDTH * IMAGE_SHRINK_FACTOR}px`,
        backgroundRepeat: 'no-repeat',
        width: `${CHARACTER_WIDTH * IMAGE_SHRINK_FACTOR}px`,
        height: `${CHARACTER_HEIGHT * IMAGE_SHRINK_FACTOR}px`,
        position: 'relative',
        marginRight: '0px'
    };

    return (
        <div id="game-screen" style={gameScreenStyle}>
            {
                !!gameState.characterImage ?
                <div id="character-image-container" style={characterContainerStyle}></div> : null
            }
            {
                gameState.screenType === 'CHOICE' ?
                <Choice 
                    prompt={gameState.prompt} 
                    updateGameState={updateGameState}
                /> : <Dialog 
                    prompt={gameState.prompt} 
                    updateGameState={updateGameState}
                />
            }
        </div>
    );
};

export default GameScreen;