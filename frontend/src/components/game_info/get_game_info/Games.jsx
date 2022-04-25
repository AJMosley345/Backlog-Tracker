import games from './gameinfo_a';
import GameInfo from "./GameInfo";
import React, { useState,useEffect } from 'react';
import { Box, Button } from '@mui/material';

// Takes the json response from gameinfo_a, puts it into the format of GameInfo and displays it
const Games = () => {
    const [gameInfo,setGameInfo] = useState([]);

    const fetchGames = async () =>{
        const response = await games.get('/game_info')
        setGameInfo(response.data)
    };

    useEffect(() => {
        fetchGames()
    },[])
    
    function refreshPage() {
        setTimeout(function(){ window.location.reload(false); }, 200);
    };

    const deleteGame = (id) => {
        games
        .delete(`/game_info/${id}`)
        .then(refreshPage());
    };

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
                                key={game.id}
                                name={game.name}
                                hours={game.hours}
                                completion_status={game.completion_status}
                                />
                                <Box sx={{ display: 'inline-flex' }}>
                                    <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={function(event){
                                        deleteGame(game.id);
                                    }}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </>
                        )
                    }
                })}
            </>
        )
    }

    return (
        <>
            {createGameList()}
        </>
    )
}

export default Games 