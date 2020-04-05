import React from 'react';
import './App.css';
import { Route,BrowserRouter} from 'react-router-dom';
import Home from "./containers/Home";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route component={Home} to="/"/>
    </BrowserRouter>
    </div>
  );
}

export default App;
