import React, {useContext} from 'react'
import { TaskContext } from '../App'

function ManageTask() {
    const {state, dispatcher} = useContext(TaskContext)

    return (
        <div>
            <ul>
                {
                    state.tasks.map((task) => {
                        return <li key={task.id}>
                            <span className={task.completed?'completed-task':''} 
                            onClick={() => dispatcher({type: 'toggle', payload: task.id})}>
                                {task.text}
                            </span>
                            <button onClick={() => dispatcher({type: 'delete', payload: task.id})}
                                className='delete'>
                                Delete
                            </button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default ManageTask