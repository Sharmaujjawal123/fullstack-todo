import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todos'

function App() {
  const [todo, settodo] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/get')
    .then(response => response.json())
    .then(data => settodo(data))

      // console.log(todo);
      
  },[]);
   
  
  return (
    <>
     <CreateTodo/>
     <Todos todos={todo}/>
    </>
  )
}



export default App
