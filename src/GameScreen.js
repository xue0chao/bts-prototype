import React, { useState } from 'react';
import Choice from './screens/Choice';
import Dialog from './screens/Dialog';
import Exposition from './screens/Exposition';
import './GameScreen.css';

const GameScreen = function({ data }) {   
    const initialState = {
        backgroundImage: data.initial.assets.backgroundImage,
        characterImage: null,
        speakerLabel: null,
        screenType: data.initial.type,
        prompt: data.initial.prompt
    };
    const [gameState, setGameState] = useState(initialState);

    function updateGameState(newStateName) {
        setGameState({
            backgroundImage: data[newStateName].assets.backgroundImage,
            characterImage: data[newStateName].assets.characterImage,
            speakerLabel: data[newStateName].assets.speakerLabel,
            screenType: data[newStateName].type,
            prompt: data[newStateName].prompt
        });
    }

    const gameScreenStyle = {
        margin: 0,
        padding: 0,
        height: '100vh',
        display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'contain'
    };

    const characterContainerStyle = {
        position: 'absolute',
        backgroundImage: `url(${process.env.PUBLIC_URL}/${gameState.characterImage})`,
        //margin: 0,
        width: '80%',
        height: '80%',
        top: '155px',
        right: '0px',
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'right center',
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
                    prompt={gameState.prompt} 
                    updateGameState={updateGameState}
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

