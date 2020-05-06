import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard 
          firstName="Mark"
          lastName="Tamura"
          age={33}
          hairColor="black"/>
        <PersonCard 
          firstName="Isiah"
          lastName="Fletcher"
          age={25}
          hairColor="sandy blonde"/>
        <PersonCard 
          firstName="Kevin"
          lastName="Udink"
          age={45}
          hairColor="brown"/>
      </header>
    </div>
  );
}

export default App;
