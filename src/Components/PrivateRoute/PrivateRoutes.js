import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoutes = (children, ...rest) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation()
    return (  
    //   <Route
    //   {...rest}
    //   render={({ location }) =>
    //    loggedInUser.emaii ? (
    //       children
    //     ) : (
    //       <Navigate
    //         to={{
    //           pathname: "/login",
    //           state: { from: location }
    //         }}
    //       />
    //     )
    //   }
    // />
      loggedInUser.email ? (<Outlet/>) : (<Navigate to="/login" replace state={{from:location}}/>)
          
       );
};

export default PrivateRoutes;