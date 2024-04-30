import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";
import { v1 } from "uuid";

export type TaskType = {
  title: string
  id: string
  isDone: boolean
}

export type FilterType = 'all' | 'completed' | 'active'

export type TodolistType = {
  title: string
  id: string
  tasks: TaskType[]
  filter: FilterType
}

const initialState: TodolistType[] = [
  {
    title: 'todo1', id: v1(), tasks: [
      { title: 'task1', id: v1(), isDone: false },
      { title: 'task2', id: v1(), isDone: true },
      { title: 'task3', id: v1(), isDone: false },
    ],
    filter: 'all'
  },
]

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0)


  const [todolists, setTodolists] = useState(initialState)

  const addTaskHandler = (title: string, todolistId: string) => {
    const task: TaskType = { title, id: v1(), isDone: false }
    const todolistsCopy = [...todolists]
    const currentTodo = todolistsCopy.find(todo => todo.id === todolistId)
    currentTodo?.tasks.push(task)
    setTodolists(todolistsCopy)
  }

  const changeFilterHandler = (todolistId: string, filter: FilterType) => {
    setTodolists(
      todolists.map(todolist => todolist.id === todolistId
        ? { ...todolist, filter }
        : todolist
      )
    )
  }

  return (
    <div className="App">
      {todolists.map(todolist => <Todolist todolist={todolist} addTaskHandler={addTaskHandler}
        changeFilter={changeFilterHandler}
      />)}
    </div>
  );
}

export default App;
