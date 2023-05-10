import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';
import Deadline from './components/Deadline/Deadline';
import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import axios from 'axios'
import Loading from './components/UI/Loading/Loading';

// const todosData =[
//   {id:1 , title:"React oxu", description:"Reactdan hooklari oxu"},
//   {id:2,  title:"Javascript oxu", description:"Javascript metodlari oxu"},
//   {id:3,  title:"Python oxu" ,description:"Djangodann builtin modullari oxu"},
// ]



function App() {

  const [todos,setTodos] = React.useState([])

  // const addTodo2 = (title,description) => {
  //   const newTodos = [...todos,{id: Math.random(),title: title, description: description}]
  //   setTodos(newTodos)
  // }


  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todolist/').then(res => {
      setTodos(res.data)
    })
  },[])

  const deleteTodo = React.useCallback((id) => {
    axios.delete(`http://127.0.0.1:8000/api/remove_todo/${id}`).then(() => {
      setTodos(prev => prev.filter(t => t.id !== id))
    })
  })



  const addTodo = React.useCallback((todo) => {
      const newTodos = [...todos,todo]
      setTodos(newTodos)
  },[todos])

  return (
    <div className="App">
      <Deadline/>
      <TodoForm onAddTodo={addTodo}/>
      <div className='todos'>
      {
        todos.length === 0
        ?
        <Loading/>
        :
        todos.map((todo,index) => {
          const onDelete = () => {
            deleteTodo(todo.id)
          }
            return <Todo key={todo.id} index={index+1} title={todo.title} description={todo.description} onDelete={onDelete}/>
        })
     
      }
      </div>
    </div>
  );
}

export default App;
