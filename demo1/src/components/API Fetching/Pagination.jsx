import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pagination = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const fetchUsers = async () => {
        const res = await axios.get('https://dummyjson.com/users?limit=100')
        setData(res.data.users)
    }
    useEffect(()=>{
        fetchUsers();
    })
  return (
    <div>
        <div>Items per page: 
            <select value={itemsPerPage} onChange={(e)=>setItemsPerPage(e.target.value)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
        </div>
        <ul>
        {currentItems.map((x, i)=>{
            return <li key={x.id}>{x.id} {x.firstName}</li>
        })}
        </ul>

<button onClick={()=>setCurrentPage(1)}>{'<<'}</button>
        <button disabled={currentPage === 1} onClick={()=>setCurrentPage(prev => prev - 1)}>{'<'}</button>
        {
            Array.from({length: data.length/itemsPerPage}, (x, i)=>{
                return <button 
                key={i}
                onClick={()=>{
                    setCurrentPage(i+1)
                }}
                >{i+1}</button>
            })
        }
        <button disabled={currentPage === data.length/itemsPerPage} onClick={()=>setCurrentPage(prev => prev + 1)}>{'>'}</button>
        <button onClick={()=>setCurrentPage(data.length/itemsPerPage)}>{'>>'}</button>
        
    </div>
  )
}

export default Pagination