import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Hooks/useToken";
import Social from "../Shared/Social/Social";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-red-500 text-center">Error: {error.message}</p>
      </div>
    );
  }

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    createUserWithEmailAndPassword(email, password);

    console.log(user);
  };

  if(token) {
    navigate("/home");
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
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleUserSignIn}>
                <Social></Social>
                <div className="mb-6">
                  <input
                    ref={nameRef}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Name"
                    required
                  />
                </div>

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
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>
                <div>
                  <p>{error ? error.message : ""}</p>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    <Link to="/login" className="text-blue-800">
                      Have An Account? Login
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

export default Register;
