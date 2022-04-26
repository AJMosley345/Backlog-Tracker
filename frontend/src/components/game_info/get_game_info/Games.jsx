import games from './gameinfo_a';
import React, { useState,useEffect } from 'react';
import { Box, Button, Stack, Typography, Card, CardContent } from '@mui/material';
import '../Game_Info.css'

// Takes the json response from gameinfo_a, puts it into the format of GameInfo and displays it
const Games = () => {
    const [gameInfo,setGameInfo] = useState([]);

    const fetchGames = async () =>{
        const response = await games.get('/game_info')
        setGameInfo(response.data)
    };
    
    function refreshPage() {
        setTimeout(function(){ window.location.reload(false); }, 200);
    };

    const deleteGame = (id) => {
        games
        .delete(`/game_info/${id}`)
        .then(refreshPage());
    };

    useEffect(() => {
        fetchGames()
    },[])

    const GameInfo = () => {
        return( 
            <>
                {gameInfo.map(game => {
                        return (
                            <div className="Game-List">
                                <Card sx={{ maxWidth: 'fit-content', variant: 'outlined' }}>
                                        <CardContent className='Game-List'>
                                            <Box sx={{ display: 'inline-flex' }}>
                                                <Stack direction={'row'} spacing={1}>
                                                    <Typography fontFamily={'Sora'}>
                                                        {game.name} |
                                                    </Typography>
                                                    <Typography fontFamily={'Sora'}>
                                                        {game.hours} Hours |
                                                    </Typography>
                                                    <Typography fontFamily={'Sora'}>
                                                        {game.completion_status}
                                                    </Typography>
                                                    <Button 
                                                    variant="contained" 
                                                    color="primary"
                                                    className='Delete-Button'
                                                    onClick={function(event){
                                                        deleteGame(game.id);
                                                    }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                </Card>
                            </div>      
                        )
                    }
                )}
            </>
            )
    }

    return (
        <>
            {GameInfo()}
        </>
    )
}

export default Games 