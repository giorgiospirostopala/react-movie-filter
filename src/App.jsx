import React from "react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [selezionato, setSelezionato] = useState('');

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
      <StampaFilm film={arrayFilm} />
    </div>
  );
}

export default App;
