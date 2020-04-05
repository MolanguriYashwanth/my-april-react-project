import React,{lazy,Suspense} from 'react';
import './App.css';
import { Route,BrowserRouter} from 'react-router-dom';
// import Home from "./containers/Home";
const LazyHome = lazy(() => import('./containers/Home'));


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <Route component={Home} to="/"/> */}
    <Route path="/" render={()=><Suspense fallback={<div>Loading...</div>}><LazyHome/></Suspense>} /> 
    </BrowserRouter>
    </div>
  );
}

export default App;
