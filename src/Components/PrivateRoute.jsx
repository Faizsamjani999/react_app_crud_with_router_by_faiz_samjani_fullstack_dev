import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    let login = false
  return (
    localStorage.getItem("isLogin",login) ? children : <Navigate to="/login"/>
  )
}

export default PrivateRoute