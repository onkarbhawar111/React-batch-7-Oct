// import React, { useEffect, useState } from 'react'

// const FetchAPI = () => {
//     const [users, setUsers] = useState([])
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users.....')
//         .then((response)=>{
//             if(!response.ok)
//                 throw new Error("Network issue occured...")
//             return response.json()
//         })
//         .then((data)=>{
//             setUsers(data)
//             setLoading(false)  })
//         .catch((err)=>{
//             setError(err.message)
//             setLoading(false)
//         })
//     }, [])

//     if(loading) return <p>loading...</p>
//     if(error) return <p>Error: {error}</p>

//   return (
//     <ul>{
//             users.map((x, i)=>{
//                 return <li key={x.id}>{x.username}</li>
//             })
//     }</ul>
//   )
// }

// export default FetchAPI




////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react'

const FetchAPI =  () => {

    const [list, setList] = useState([])

    useEffect( ()=>{
        async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json()
            setList(result)
            console.log(result)
        }


        fetchData()
    }, [])
  return (
    <ul>{
            list.map((x, i)=>{
                return <li key={x.id}>{x.title}</li>
            })
    }</ul>
  )
}

export default FetchAPI