import React, {useState, useContext} from 'react'
import { TaskContext } from '../App'

function AddTask() {
    const [text, setTaskDiscription] = useState('')

    const {dispatcher} = useContext(TaskContext)

    return (
        <div>
            <input placeholder='Task discription' onChange={e => setTaskDiscription(e.target.value)}/>
            <button onClick={() => dispatcher({type: 'add', payload: text})}>Add Task</button>
        </div>
    )
}

export default AddTask