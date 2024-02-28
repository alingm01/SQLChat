import { useState } from 'react';

import './App.css';
import sqlLogo from './assets/sql-server.png';

function App() {

  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(queryDescription);
  }

  return (
    <main className="main">
        <img src={sqlLogo} alt="sql Logo" className='icon' />
       <h3>Chat My Database</h3>
       <form onSubmit={onSubmit}>
        <input 
          type="text"
          name='query-description' 
          placeholder='What question do you want answered?'
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input 
          type="submit" 
          value="Generate Answer" 
        />
       </form>
    </main>
  )
}

export default App
