
import './App.css';
import {BrowserRouter as Router,  Route,  Switch } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Homee from './pages/Home/Homee/Homee';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import About from './pages/About/About';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import AddService from './pages/AddService/AddService';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageBooking from './pages/ManageBooking/ManageBooking';
import MyBooking from './pages/MyBooking/MyBooking';



function App() {
  return (
  <AuthProvider>
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
            
            <Route path="/blogs">
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/manageBooking">
              <ManageBooking></ManageBooking>
            </Route>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  </AuthProvider>
  );
}

export default App;
