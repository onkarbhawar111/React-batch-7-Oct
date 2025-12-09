// import App1 from './components/Routing/Routing 2/App1.jsx'

// function App(){

//   // const [toggle, setToggle] = useState(true) //toggle = true

//   // function handleChange(){
//   //   setToggle(!toggle)
//   // }

//   return(
//     <>
//     {/* <button onClick={handleChange}>Change Page</button>
//     <div>{toggle == true ? <HomePage /> : <AboutPage />}</div> */}
//     {/* <Width /> */}
//     <App1 />
//     </>
//   )
// }

// export default App




import React from 'react'
import StyledComponent from './components/Styled Components/StyledComponent'
import StyledComp2 from './components/Styled Components/StyledComp2'
import Parent from './components/Lifting State up/Ex2/Parent'
import App1 from './components/HOC/App1'
import FetchAPI from './components/API Fetching/FetchAPI'
import Axios from './components/API Fetching/Axios'
import Loading_State from './components/API Fetching/Loading_State'
import CRUD_Operation from './components/API Fetching/CRUD_Operation'
import Pagination from './components/API Fetching/Pagination'
import FormValidation from './components/Form Validation/FormValidation'

const App = () => {
  return (
    <div>
      <FormValidation />
    </div>
  )
}

export default App