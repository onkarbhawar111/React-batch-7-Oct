import React, { useEffect, useState, useRef } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState('')
    const [editIndex, setEditIndex] = useState(null)
    const [list, setList] = useState(()=>{
        const stored = localStorage.getItem('tasks')
        return stored ? JSON.parse(stored) : []
    })
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(list))
    })

    function handleAdd(){
        if(task.trim() === '') return ;

        if(editIndex !== null){
            const updatedList = list.map((x, i)=>(
                i == editIndex ? task : x
            ))
            setList(updatedList)
        } else{
            setList([...list, task])
        }
        setTask('')
        setEditIndex(null)

        refElement.current.focus()
    }
    function handleDelete(index){
        const updatedList = list.filter((x, i)=>i != index )
        setList(updatedList)
    }
    function handleEdit(index){
        setEditIndex(index)
        setTask(list[index])
        refElement.current.focus()
    }

    const refElement = useRef(null)
  return (
    <div>
        <input ref={refElement} type="text" value={task} placeholder='Enter task' onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAdd}>{editIndex == null ? 'Add' : 'Edit'}</button>
        <div>
            <ol>
                {list.map((x, i)=>{
                    return <li key={i}>{x} {' '}
                    <span></span>
                    <button onClick={()=>handleEdit(i)}>Edit</button>{' '}
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                    </li>
                })}
            </ol>
            <div>Total tasks: {list.length}</div>
            <button onClick={()=>{
                localStorage.removeItem('tasks')
                return setList([])}}>Delete All from localStorage</button>
        </div>
    </div>
  )
}

export default ToDoList