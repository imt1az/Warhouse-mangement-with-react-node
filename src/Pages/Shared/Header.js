import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = ()=>{
      signOut(auth);
    }

    return (
        <div>
                  <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              WarHouse
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to='/home'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                 
                 {user ? <Link to='/addItems'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Add Item</span>
                </Link> : ''}

                
              </li>
              <li className="nav-item">
                 
                 <Link to='/manageProducts'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Manage Products</span>
                </Link>

                
              </li>
              <li className="nav-item">
              <a href='home#services'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Services</span>
                </a>
              </li>
              {/* <li className="nav-item">
              <Link to='/about'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">About</span>
                </Link>
              </li> */}
              <li className="nav-item">
              <Link to='/blog'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Blog</span>
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link to='/login'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Log in</span>
                </Link>
              </li> */}
              <li className="nav-item">
                  {
                      user ? <button onClick={handleSignOut} className='text-white ml-2'>Sign Out</button>
                      :
                      <Link to='/login'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                 <span className="ml-2">Log in</span>
                </Link>
                  }
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Header;