import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoadingPage from './pages/LoadingPage';
import HomePage from './pages/HomePage';
import Testpage from './pages/TestPage'


function App() {
  return (
    <Router>  
      <Route exact path="/" component={LoadingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/test" component={Testpage} />
    </Router>

  );
}

export default App;
