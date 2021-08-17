import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom"
import Register from './pages/RegistrationPage/Register.js';
import Login from './pages/LoginPage/Login.js';

const App = () =>{
  return (
    <>
    <Router>
      <Switch>

        <Route exact path="/">
          <Register/>
        </Route>
        <Route exact path="/sign-in">
          <Login/>
        </Route>

      </Switch>
    </Router>
    </>
  );
}
export default App;
