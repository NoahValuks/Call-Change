import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react';
import CCContainer from './containers/CCContainer';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import Kings from './components/changes/Kings';
import Queens from './components/changes/Queens';
import Tittums from './components/changes/Tittums';
import Whittingtons from './components/changes/Whittingtons';
import BackRounds from './components/changes/BackRounds'

function App() {

  const [changes, setChanges] = useState([])
  
  useEffect(() => {
    getChanges();
  }, []);

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
      <Route path="/Kings" component={Kings} />
      <Route path="/Queens" component={Queens} />
      <Route path="/Tittums" component={Tittums} />
      <Route path="/Whittingtons" component={Whittingtons} />
      <Route path="/BackRounds" component={BackRounds} />
      <Route component={ErrorPage} />
      </Switch>
      </>
    </Router>
    </>
  );
}

export default App;
