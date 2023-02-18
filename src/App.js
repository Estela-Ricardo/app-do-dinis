import React, { useState } from 'react';
import joke from './joke.json';
import './App.css';


const App = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentJoke, setCurrentJoke] = useState(joke[Math.floor(Math.random() * joke.length)]);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };


  const handleNewJokeClick = () => {
    setCurrentJoke(joke[Math.floor(Math.random() * joke.length)]);
    setShowAnswer(false);
  }


  return (
    <div className="joke-app">
      <div className="content">
        <h1>Livro de Piadas do Dinis</h1>
        <p>{currentJoke.question}</p>
        {showAnswer ? <div dangerouslySetInnerHTML={{ __html: currentJoke.answer }} /> : <div style={{ height: '1.2em' }} >&nbsp;</div>}
        <button onClick={handleClick}>
          {showAnswer ? 'Esconder Resposta' : 'Mostrar Resposta'}
        </button>

        <button onClick={handleNewJokeClick}>Nova Piada</button>
      </div>
    </div>
  );
};

export default App
