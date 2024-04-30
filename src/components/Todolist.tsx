import React, { useState } from 'react'
import { FilterType, TaskType, TodolistType } from '../App'

type PropsType = {
    todolist: TodolistType
    addTaskHandler: (title: string, todolistId: string) => void
    changeFilter: (todolistId: string, filter: FilterType) => void
}

const Todolist = ({ todolist, addTaskHandler, changeFilter }: PropsType) => {

    // let tasks: TaskType[] = []
    // if (todolist.filter === 'all') {
    //     tasks = todolist.tasks.map(el => el)
    // }
    // if (todolist.filter === 'completed') {
    //     tasks = todolist.tasks.filter(task => task.isDone)
    // }
    // if (todolist.filter === 'active') {
    //     tasks = todolist.tasks.filter(task => !task.isDone)
    // }

    const tasks = todolist.tasks.filter(task => {
        if (todolist.filter === 'all') {
            return true
        }
        if (todolist.filter === 'completed') {
            return task.isDone
        }
        if (todolist.filter === 'active') {
            return !task.isDone
        }
    })

    const [inpValue, setInpValue] = useState('')
    return (
        <div>
            <h3>{todolist.title}</h3>
            <input type="text" value={inpValue} onChange={(e) => setInpValue(e.currentTarget.value)} />
            <button onClick={() => { addTaskHandler(inpValue, todolist.id) }}>add{ }</button>
            <button onClick={() => { }}>del</button>
            <div>
                <button onClick={() => { changeFilter(todolist.id, 'all') }}>all</button>
                <button onClick={() => { changeFilter(todolist.id, 'completed') }}>completed</button>
                <button onClick={() => { changeFilter(todolist.id, 'active') }}>active</button>
            </div>

            <ul>
                {tasks.map(task => <li><span>{task.title}{String(task.isDone)}</span><button onClick={() => { }}>del</button></li>)}
            </ul>
        </div>
    )
}

export default Todolist;
