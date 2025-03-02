import React from 'react';

function stampaFilm(arrayFilm) {
    return (
        <ul>
            {arrayFilm.map((film, i) => (
                <li key={i}>{film.title}</li>
            ))}
        </ul>
    );
}

export default stampaFilm;