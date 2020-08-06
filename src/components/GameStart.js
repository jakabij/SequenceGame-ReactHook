import React, {useState, useEffect} from 'react';
import {useForm} from "react-hook-form"; 
import { render } from '@testing-library/react';
import PlayerNames from "./PlayerNames"
import { Link } from 'react-router-dom';

const GameStart = () => {
    const [playerCountInput, setPlayerCountInput] = useState(0);
    const [playersInput, setPlayersInput] = useState([]);
    const [playerCount, setPlayerCount] = useState(0);
    const [players, setPlayers] = useState([]);

    const onClickSetPlayerCount = () =>{
        setPlayerCount(playerCountInput);
        const players = [];
        const playersInput = []
        for (let i = 0; i < playerCountInput; i++) {
            players.push({name: null});
            playersInput.push({name: null});
        }
        setPlayers(players);
        setPlayersInput(playersInput);
    }

    const onClickSetPlayerName = (index) => {
        players[index].name = playersInput[index].name;
        setPlayers(players);
    }

    return (
        <div>
            <h1>How many players would play?</h1>
            <input type="text" placeholder="Number..." name="number" onChange={event =>
                setPlayerCountInput(event.target.value)}/>
            <input type="submit" value="Next" onClick={onClickSetPlayerCount}/>
            
            {players.map((player, index) => {
                return ( 
                <>
                    <input type="text" placeholder={"player name..."} name={"players"} onChange={event => {
                        playersInput[index].name = event.target.value;
                        setPlayersInput(playersInput);
                    } }/>
                    <input type="submit" value="Set" onClick={() => onClickSetPlayerName(index)}/>
                </>);
            })}
            
            <Link to={{
                    pathname: '/newGame',
                    state: {playersInput},
                    }}>Start Game</Link>
            {/* <input type="button" value="Start Game" onClick={onClickStartGame}/> */}
        </div>
    )
}

export default GameStart
