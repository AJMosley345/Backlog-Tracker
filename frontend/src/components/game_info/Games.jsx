import games from './gameinfo_a';
import GameInfo from "./GameInfo";
import React, { useState,useEffect } from 'react';

// Takes the json response from gameinfo_a, puts it into the format of GameInfo and displays it
const Games = () => {
    const [gameInfo,setGameInfo] = useState([]);

    const fetchGames = async () =>{
        const response = await games.get('/game_info')
        setGameInfo(response.data)
    }

    const createGameList = () => {
        return(
            <>
                {gameInfo.map(game => {
                    if(!game){
                        return <div>Loading...</div>
                    } else {
                        return (
                            <>
                                <GameInfo 
                                name={game.name}
                                hours={game.hours}
                                completion={game.completion}
                                key={game.name}
                                />
                            </>
                        )
                    }
                })}
            </>
        )
    }


    useEffect(() => {
        fetchGames()
    },[])

    return (
        <>
            {createGameList()}
        </>
    )
}

export default Games