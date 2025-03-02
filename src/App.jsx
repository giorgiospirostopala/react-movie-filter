import React from "react"
import { useState } from 'react'
import { useEffect } from 'react'
import './index.css';

import StampaFilm from './components/StampaFilm';
import arrayFilm from "./data/film";


function App() {
  const [selezionato, setSelezionato] = useState('');
  const [filtrato, setFiltrato] = useState(arrayFilm);

  useEffect(() => {
    if (selezionato) {
      setFiltrato(arrayFilm.filter((film) => film.genre === selezionato));
    } else {
      setFiltrato(arrayFilm);
    }
  }, [selezionato]);

  return (
    <div>
      <h1>FILTRA</h1>
      <select onChange={(e) => setSelezionato(e.target.value)}>
        <option value="">Seleziona</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
      <StampaFilm arrayFilm={filtrato} />
    </div>
  );
}

export default App;
