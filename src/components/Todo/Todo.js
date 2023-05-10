import React from 'react'
import './Todo.css'




function Todo(props){
    return(
        <div className="Todo">
            <div className='index'>{props.index}</div>
            <div className='content'>
                <div className='title'>{props.title}</div>
                <div className='description'>{props.description}</div>

            </div>
            <div className='controls'>
                <button className='delete' onClick={props.onDelete}>Sil</button>
            </div>
            
        </div>
    )
}

export default Todo