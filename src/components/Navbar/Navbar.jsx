import './Navbar.css';
import logo from '../../assets/logo.png';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { logout, auth } from '../../firebase'; // Import auth from firebase

const Navbar = () => {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // State to track user information

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
        console.log(user);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <div ref={navRef} className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-left">
        <Link to="/" onClick={handleMenuClick}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={menuOpen ? 'show-menu' : ''}>
          <Link to="/" className="nav_link" onClick={handleMenuClick}>
            <li>Home</li>
          </Link>
          <Link to="/top-rated" className="nav_link" onClick={handleMenuClick}>
            <li>Top Rated</li>
          </Link>
          <Link to="/popular" className="nav_link" onClick={handleMenuClick}>
            <li>Popular</li>
          </Link>
          <Link to="/upcoming" className="nav_link" onClick={handleMenuClick}>
            <li>Upcoming</li>
          </Link>
          <Link to="/latest" className="nav_link" onClick={handleMenuClick}>
            <li>Latest</li>
          </Link>
          <Link to="/top_picks_for_you" className="nav_link" onClick={handleMenuClick}>
            <li>Top Picks for you</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-right">
        {user ? (
          <div className="navbar-profile">
            <img src={profile_img} alt="profile" className="profile" />
            <p className='user_name'>{user.email}</p>
            <img src={caret_icon} alt="caret" />
            <div className="dropdown">
              <p onClick={handleLogout}>Sign Out</p>
            </div>
          </div>
        ) : ( 
          <Link to="/login" className="nav_link">
            <button>Login</button>
          </Link>
        )}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
