import React from 'react';
import Card from './components/Card/Card';
import './App.css';

function App() {

  const cardName = 'Card Number 1';

  return (
    <div className="jumbotron">
      <p className = "red"> Hello World! </p>
      <Card value={cardName}/>
    </div>
  );
}

//Within JS, functions can return jsx
//Withing jsx, anything inside {...} is js: {'javascript stuff here'}

export default App;
