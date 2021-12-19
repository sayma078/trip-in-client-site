import { getAuth, signOut } from '@firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
<div className='sticky-top'>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid">
          <div className='pe-3 ps-4 text-warning'>
          </div>
          <Link class="navbar-brand" href="#">
            <span className='text-warning'><i className="fas fa-plane-departure text-warning"></i> Tour_in</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div class="navbar-nav">
              <Link class="nav-link active text-white" aria-current="page" to="/home">
                Home
              </Link>
              <Link class="nav-link active text-white" aria-current="page" to="/about">
              About Us
              </Link>
              {loginUser?.email && <Link class="nav-link text-white" to="/dashboard">
              DashBoard
              </Link>}
              {/* {loginUser?.email && <Link class="nav-link text-white" to="/manageBooking">
              Manage Booking
              </Link>}
             { loginUser?.email && <Link class="nav-link text-white" to="/mybooking">
              My Booking
              </Link>}
              { loginUser?.email && <Link class="nav-link text-white" to="/addService">
              Add Service
              </Link>} */}
              { loginUser?.email? <Link onClick={handleLogout} class="nav-link text-white" to="/login">
                logOut {''}{loginUser?.displayName}
              </Link>
                 :
                <Link class="nav-link text-white " to="/login">
                login
              </Link>
              }
            </div>

          </div>
        </div>
      </nav>
    </div>
    );
};

export default Header;


