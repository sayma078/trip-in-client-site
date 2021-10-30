import { getAuth, signOut } from '@firebase/auth';
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Header = () => {
    const [loginUser, setLoginUser] = useContext(AuthContext);

    const handleLogout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          setLoginUser("");
        })
        .catch((error) => {});
    };
    return (
        <div>
            <>
  <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  as={Link} to="/home"><i className="fas fa-plane-departure text-warning"></i> <span className="text-warning">Trip_in</span></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/manageBooking">Manage Booking</Nav.Link>
      {loginUser?.email ? (
                <NavLink onClick={handleLogout} className="nav-link" as={Link} to="#">
                  logOut {""}
                  {loginUser?.displayName}
                </NavLink>
              ) : (
                <NavLink className="nav-link" as={Link} to="/login">
                  login
                </NavLink>
              )}
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;


