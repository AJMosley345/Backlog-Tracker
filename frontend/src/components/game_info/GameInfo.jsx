import React from 'react';

const GameInfo = (props) => {
    return (
        <>
            <h2>{props.name} {props.hours} {props.completion}</h2>
        </>
    )
}

export default GameInfo