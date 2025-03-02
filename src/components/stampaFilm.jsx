import React from 'react';

function StampaFilm({ arrayFilm }) {
    return (
        <ul>
            {arrayFilm.map((film, i) => (
                <li key={i}>{film.title}</li>
            ))}
        </ul>
    );
}

export default StampaFilm;