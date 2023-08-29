
import './App.css';
import './index.css';
import {useState, useEffect} from 'react'
import {BsTrash, BsBookMarkCheck, BsBookMarkCheckFill} from 'react-icons/bs'


const API = 'http://localhost:5000'
function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [load, setLoad] = useState(false);
   
  const handleSubmite = async(e) => { 
    e.preventDefault();
    const todo = {
      id: Math.random(),
      time,
      title,
      done: false,
      
    }
    
      await fetch(API + "todos", {
        method:'POST',
        body: JSON.stringify(todo),
        Headers: {
          "Content-type": "Application/json,"

        }
          
      });
    
    setTitle("");
    setTime("");

  }
  
  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React todo</h1>
      </div>
      <div className='form-todo'>
        <h2>insira sua proxima tarefa</h2>
        <form onSubmit={handleSubmite}>  
        <div className='form-control'>
          <label htmlFor='title'>oque voce vai fazer</label>
          <input type='text'
          name='title'
          placeholder='titulo da tarefa'
          onChange={(e)=> setTitle(e.target.value)}
          valu={title}
          required />
        </div>
        <div className='form-control'>
          <label htmlFor='time'>Duracao</label>
          <input type='text'
          name='time'
          placeholder='tempo estimado em (em horas)'
          onChange={(e)=> setTime(e.target.value)}
          valu={time}
          required />
        </div>   
        <input type='submit' value='criar tarefa'/> 
        </form>
      </div>
      <div className='list-todo'>
       <h2>lista de taferas:</h2>
       {todos.length === 0 && <p>nao ha taferas</p>}
      </div>
    </div>
  );
}

export default App;
