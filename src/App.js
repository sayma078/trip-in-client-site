
import './App.css';
import {BrowserRouter as Router,  Route,  Switch } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Homee from './pages/Home/Homee/Homee';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import About from './pages/About/About';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
              <Homee></Homee>
            </Route>
            <Route path="/home">
              <Homee></Homee>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/details/:id">
              <Details></Details>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
