import React from "react";
import ReactDOM from "react-dom/client";
import "./Resources/css/app.css";

import firebase from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const auth = getAuth(firebase);

onAuthStateChanged(auth, (user) => {
  root.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>
  );
});
