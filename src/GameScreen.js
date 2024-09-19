import React, { useState } from 'react';
import Choice from './screens/Choice';
import Dialog from './screens/Dialog';
import Exposition from './screens/Exposition';
import './GameScreen.css';

const GameScreen = function({ data }) {   
    const initialState = {
        backgroundImage: data.initial.assets.backgroundImage,
        characterImage: data.initial.assets.characterImage,
        speakerLabel: data.initial.assets.speakerLabel,
        screenType: data.initial.type,
        prompt: data.initial.prompt,
        nextScreen: data.initial.prompt.nextScreen || null,
    };
    const [gameState, setGameState] = useState(initialState);

    function updateGameState(newStateName) {
        const newState = data[newStateName];
        setGameState({
            backgroundImage: newState.assets.backgroundImage,
            characterImage: newState.assets.characterImage,
            speakerLabel: newState.assets.speakerLabel,
            screenType: newState.type,
            prompt: newState.prompt,
            nextScreen: newState.prompt.nextScreen || null,
        });
    }

    const gameScreenStyle = {
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'contain'
    };

    const characterContainerStyle = {
        position: 'absolute',
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.characterImage})`,
        width: '80%',
        height: '80%',
        top: '155px',
        right: '0px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    };

    const characterLabelStyle = {
        position: 'absolute',
        marginRight: '10%'
    };

    return (
        <div id="game-screen" style={gameScreenStyle}>
            {
                gameState.screenType === 'CHOICE' ?
                <Choice 
                    prompt={gameState.prompt} 
                    updateGameState={updateGameState}
                /> : gameState.screenType === 'DIALOG' ?
                 <Dialog 
                    dialogs={gameState.prompt.dialogs} 
                    updateGameState={updateGameState}
                    nextScreen={gameState.nextScreen}
                />
                : <Exposition 
                    prompt={gameState.prompt} 
                    updateGameState={updateGameState}
                />
            }
        </div>
    );
};

export default GameScreen;
