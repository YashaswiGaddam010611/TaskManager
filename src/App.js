import React, { useReducer, useEffect } from 'react';

import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ManageTask from './components/ManageTask';

const initialState = {
  tasks: []
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {tasks: [...state.tasks, {id: Date.now(), text: action.payload, completed: false}]}
    case 'delete':
      return {tasks: state.tasks.filter(task => task.id !== action.payload)}
    case 'toggle':
      return {tasks: state.tasks.map(task => {
        return task.id === action.payload ? {...task, completed: !task.completed} : task
      })}
    default:
      return state
  }
}

export const TaskContext = React.createContext()

function App() {
  const [state, TaskDispatcher] = useReducer(reducer, initialState)
  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="App">
      <Header />

      <TaskContext.Provider value={{state: state, dispatcher: TaskDispatcher}}>
        <AddTask />
        <ManageTask />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
