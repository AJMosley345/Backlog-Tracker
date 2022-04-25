import React from 'react';
import './index.css';
import AddGame from './components/game_info/AddGame';
import Base from './components/base/Base';

export default function AddGamesPage() {
    return(
        <div>
            <Base />
            <AddGame />
        </div>
    );
}