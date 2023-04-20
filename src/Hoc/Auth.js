import React from "react";
import { Navigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import firebase from "../firebase";

// const AuthGuard = (Component) => {
//   class AuthHoc extends React.Component {
//     authCheck = () => {
//       const auth = getAuth(firebase);
//       const user = auth.currentUser;

//       if (user) {
//         return <Component />;
//       } else {
//         return <Navigate to="/" />;
//       }
//     };

//     render() {
//       return <>{this.authCheck()}</>;
//     }
//   }

//   return AuthHoc;
// };

const AuthGuard = (Component) => {
  const auth = getAuth(firebase);
  const user = auth.currentUser;

  if (user) {
    return <Component user={user} />;
  } else {
    return <Navigate to="/sign_in" />;
  }
};

export default AuthGuard;
