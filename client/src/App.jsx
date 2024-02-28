import { useState } from 'react';

import './App.css';
import sqlLogo from './assets/sql-server.png';

function App() {

  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    console.log(queryDescription);
    const query = await generateQuery();
    setSqlQuery(query);  
  }

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3005/generate', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({queryDescription})
    })
    const data = await response.json();
    return data.answer
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
       {sqlQuery && <div className='queryOutput'>
        {sqlQuery}
       </div>}
    </main>
  )
}

export default App
