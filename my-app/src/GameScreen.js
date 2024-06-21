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

    const gameScreenStyle = {
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'contain'
    };

    const characterContainerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.characterImage})`,
        margin: '0 0 0 0',
        width: '80%',
        height: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'contain'
    };

    const characterLabelStyle = {
        position: 'absolute',
        marginRight: '10%'
    };

    return (
        <div id="game-screen" style={gameScreenStyle}>
            {
                !!gameState.characterImage ?
                <div id="character-image-container" style={characterContainerStyle}>
                    {/*<div id="character-label" style={characterLabelStyle}>
                        {gameState.prompt.label}
                    </div>*/}
                </div> : null
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