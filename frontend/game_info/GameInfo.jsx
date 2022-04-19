import React from 'react';

const GameInfo = (props) => {
    return (
        <>
            <h2>{props.name}</h2>
            <h2>{props.hours}</h2>
            <h2>{props.completion}</h2>
        </>
    )
}