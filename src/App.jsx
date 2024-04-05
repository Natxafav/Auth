

import "./App.css";
import { RouterProvider } from 'react-router-dom'
import { Router } from "./assets/Router/router";
import { useContext, useState } from "react";
import { NameContext } from "./context/UserContext";


function App() {
  const [user, setUser] = useState('');

 


  return (
    <NameContext.Provider value={{user, setUser}}>
      <RouterProvider router={Router} />
    </NameContext.Provider>
  );
}

export default App;
