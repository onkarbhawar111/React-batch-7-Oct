// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Axios = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>{
//         setUsers(res.data)
//         console.log(res)
//         setLoading(false)
//     })
//     .catch((err)=>{
//         setError(err.message)
//         setLoading(false)
//     })
//   }, [])

//   if(loading) return <p>loading...</p>
//     if(error) return <p>Error: {error}</p>

//   return (
//     <ul>{
//             users.map((x, i)=>{
//                 return <li key={x.id}>{x.username}</li>
//             })
//     }</ul>
//   );
// };

// export default Axios;




///////////////////////////////////////////////////////////////




import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Axios = () => {
    const [list, setList] = useState([])

    useEffect( ()=>{
        async function fetchData(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setList(response.data)
        }

        fetchData()
    }, [])
  return (
    <ul>{
            list.map((x, i)=>{
                return <li key={x.id}>{x.username}</li>
            })
    }</ul>
  )
}

export default Axios