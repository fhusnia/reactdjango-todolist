import React from 'react';
import "./TodoForm.css";
import axios from 'axios'


const acceptedRegex = /^[\w\s]*$/

function TodoForm(props) {


    const[title,setTitle] = React.useState('');
    const[description,setDescription] = React.useState('');

    const titleHandler = (e) =>{
        if(acceptedRegex.test(e.target.value))
        setTitle(e.target.value)
    }

    const InputRef = React.useRef()

    const descriptionHandler = (e) => setDescription(e.target.value)





    const addHandler = React.useCallback(async () => {
        const data = {title,description}
        const response = await axios.post('http://127.0.0.1:80000/api/todolist/',data)
        const todo = response.data
        props.onAddTodo(todo)
        setTitle('')
        setDescription('')
    },[title,description,props])

    React.useEffect(() => {
        InputRef.current.focus()
    },[])


    return (

        <>
            <input ref={InputRef} className='title-input' onChange={titleHandler} value={title}/>
            <textarea className='content-input' onChange={descriptionHandler} value={description}/>
            <button className='add-button' onClick={addHandler}>Add</button>
            {/* <p>{title}</p>
            <p>{description}</p> */}
        </>
    );
}

export default TodoForm