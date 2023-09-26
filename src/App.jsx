import Login from './pages/Login';
import Signup from './pages/Signup';
import List from './pages/List';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_CHECK_BACKEND}/status`)
      .catch(() => {
        axios.post(`${import.meta.env.VITE_REACT_APP_REDEPLOY_BACKEND}`);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
