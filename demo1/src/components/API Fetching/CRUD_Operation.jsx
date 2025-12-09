import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CRUD_Operation = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')

     const fetchUsers = async () =>{
       const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }
    const addUser = async () =>{
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', {name})
        setUsers([...users, res.data])
    }
    const updateUser = async (id) =>{
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {name: "Updated !"})
        setUsers(users.map((x, i)=> x.id == id ? res.data : x))
    }
    const deleteUser = async (id) =>{
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUsers(users.filter((x)=>x.id !== id))
    }

    useEffect(()=>{
        fetchUsers();
    }, [])

  return (
    <div>
        <input type="text" onChange={e=>setName(e.target.value)} />
        <button onClick={addUser}>Add User</button>
        <div>
            <ul>
                {users.map((x)=>{
                    return <li key={    x.id}>{x.name}
                    <button onClick={()=>updateUser(x.id)}>Edit</button>
                    <button onClick={()=>deleteUser(x.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default CRUD_Operation