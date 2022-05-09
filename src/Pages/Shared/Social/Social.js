import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../Hooks/useToken";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";
  
  if (token) {
    toast("You Are Loged In");
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-red-500 text-center">Error: {error.message}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => signInWithGoogle()}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        >
          Google
        </button>

        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        >
          Facebook
        </button>

        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 h-4"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">Or</p>
      </div>
      {errorElement}
    </div>
  );
};

export default Social;
