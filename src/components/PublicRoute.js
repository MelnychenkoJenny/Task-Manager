// import { useSelector } from "react-redux"
// import { Navigate } from 'react-router-dom';
// import { getAuth } from "redux/selectors";


const PublicRoute = ({ children: RegisterOrLoginPage }) => {  //children - це RegisterPage або LoginPage
    // const { isLoggedIn } = useSelector(getAuth); 
    // return isLoggedIn ? <Navigate to='/home' /> : RegisterOrLoginPage;   
}

export default PublicRoute;