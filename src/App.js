import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;