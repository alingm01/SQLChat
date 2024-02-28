import './App.css';
import sqlLogo from './assets/sql-server.png';

function App() {
  return (
    <main className="main">
        <img src={sqlLogo} alt="sql Logo" className='icon' />
       <h3>Chat My Database</h3>
       <form>
        <input 
          type="text"
          name='query-description' 
          placeholder='What question do you want answered?'
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
