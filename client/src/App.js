import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react';
import CCContainer from './containers/CCContainer';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';

function App() {

  const [changes, setChanges] = useState([])
  
  useEffect(() => {
    getChanges();
  }, [changes]);

  const getChanges = () => {
    fetch("http://127.0.0.1:5000/api/changes")
      .then(results => results.json())
      .then(data => setChanges(data));
  };

  return (
    <>
    <Router>
      <>
      <NavBar />
      <Switch>
      <Route 
      exact path="/" 
      render={() => <CCContainer changes={changes} />} 
      />
      <Route component={ErrorPage} />
      </Switch>
      </>
    </Router>
    </>
  );
}

export default App;
