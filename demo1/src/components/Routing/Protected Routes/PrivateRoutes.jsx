import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const isLoggedIn = true
  return isLoggedIn ? children : <Navigate to='/' />
}

export default PrivateRoutes


