import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { MoralisProvider } from "react-moralis";

import NavBar from "./components/NavBar";
//<NavBar />

import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { store } = useContext(Context);
  //const [users, setUsers] = useState([]);

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  // if (loading) {
  //     return <Spinner animation={"grow"}/>
  // }

  return (
    <MoralisProvider 
      serverUrl={process.env.REACT_APP_SERVER_URL} 
      appId={process.env.REACT_APP_APPID}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>  
    </MoralisProvider>
  );
});
//            <NavBar />

export default App;
