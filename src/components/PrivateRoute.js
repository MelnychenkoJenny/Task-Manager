// import { useSelector } from "react-redux"
// import { Navigate } from 'react-router-dom';
// import { getAuth } from "redux/selectors";


const PrivateRoute = ({ children: HomePage }) => {    
    // const { isLoggedIn, isRefreshing } = useSelector(getAuth); 
    // const shouldRedirect = !isLoggedIn && !isRefreshing;

    // return shouldRedirect ? <Navigate to='/auth/login' /> : HomePage;  
}

export default PrivateRoute;