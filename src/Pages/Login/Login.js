import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Social from "../Shared/Social/Social";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import useToken from "../Hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    // navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-red-500 text-center">Error: {error.message}</p>
      </div>
    );
  }

  const emailRef = useRef("");
  const passRef = useRef("");

  const handleUserSignIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    await signInWithEmailAndPassword(email, password);

    // navigate(from, { replace: true });

    emailRef.current.value = "";
    passRef.current.value = "";
  };
  if(token) {
    toast("You Are Loged In");
    navigate(from, { replace: true });
  }

  return (
    <div>
      <section className="h-screen md:container mx-auto">
        <div className="px-6 h-full text-gray-800">
          <div className="flex md:justify-center md:justify-between justify-center items-center flex-wrap h-full">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto  md:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt=""
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleUserSignIn}>
                <Social></Social>

                <div className="mb-6">
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    ref={passRef}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label inline-block text-gray-800">
                      Remember me
                    </label>
                    {errorElement}
                  </div>

                  {/* <button onClick={resetEmail} className="text-blue-800"><p>Forgot password?</p></button> */}
                </div>
                <div>
                  <p>{error ? error.message : ""}</p>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
