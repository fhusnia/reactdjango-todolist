import React from 'react'
import './Deadline.css'




function Deadline(props){
    const [days,setDays] = React.useState(0)
    const [hours,setHours] = React.useState(0)

    const incDays = () =>{
        setDays(days + 1)
    }

    const decDays = () =>{
        setDays(days - 1)
    }

    const incHours = () =>{
        setHours(hours + 1)
    }

    const decHours = () =>{
        setHours(hours - 1)
    }

    return(
        <div className="Deadline">
            <div className="buttons">

                <button className='button' onClick={incDays}>day +</button>
                <button className='button' onClick={decDays}>day -</button>

                <button className='button' onClick={incHours}>hour +</button>
                <button className='button' onClick={decHours}>hour -</button>
            </div>
            <div className="values">
                <div>Day:</div>
                <div>{days}</div>
                <div>Hour:</div>
                <div>{hours}</div>
            </div>
        </div>

    )

}

export default Deadline