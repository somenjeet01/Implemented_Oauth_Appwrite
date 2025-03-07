import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { OAuthProvider } from "appwrite";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      // const redirectUrl = window.location.origin + "/auth/callback";

      const val = await account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5173/profile",
        "http://localhost:5173/"
      );
      console.log("val ", val);
    } catch (error) {
      console.log("OAuth Error:", error);
    }
  };

  const loginWithGitHub = async () => {
    try {
      // const redirectUrl = window.location.origin + "/auth/callback";

      const val = await account.createOAuth2Session(
        OAuthProvider.Github,
        "http://localhost:5173/profile",
        "http://localhost:5173/"
      );
      console.log("val ", val);
    } catch (error) {
      console.log("OAuth Error:", error);
    }
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center font-bold text-2xl">Log in</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          []
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Don't have Account, Sign Up
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={loginUser}
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <button
                    type="submit"
                    onClick={loginWithGoogle}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.6 10.227c0-.682-.06-1.34-.173-1.973H10v3.746h5.473c-.247 1.26-.956 2.323-2.002 3.048v2.538h3.214c1.88-1.733 2.96-4.286 2.96-7.359z"
                        clipRule="evenodd"
                        fill="#4285F4"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10 20c2.7 0 4.96-.893 6.613-2.417l-3.214-2.538c-.89.6-2.018.955-3.4.955-2.618 0-4.83-1.768-5.622-4.138H1.05v2.6C2.705 17.382 6.094 20 10 20z"
                        clipRule="evenodd"
                        fill="#34A853"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.378 11.862A5.978 5.978 0 0 1 4 10c0-.645.11-1.264.31-1.84V5.56H1.05A9.994 9.994 0 0 0 0 10c0 1.657.395 3.232 1.05 4.56l3.328-2.698z"
                        clipRule="evenodd"
                        fill="#FBBC05"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10 4.038c1.48 0 2.812.507 3.86 1.5L16.23 3.18C14.957 1.968 12.97 1 10 1 6.094 1 2.705 3.618 1.05 7.44l3.26 2.7c.793-2.37 3.004-4.102 5.69-4.102z"
                        clipRule="evenodd"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>
                </div>

                <div>
                  <button
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.805 1.304 3.49.996.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.237-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.521 11.521 0 013.003-.403c1.02.005 2.046.137 3.003.403 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.626-5.478 5.92.43.37.812 1.103.812 2.22v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={loginWithGitHub}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.805 1.304 3.49.996.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.237-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.521 11.521 0 013.003-.403c1.02.005 2.046.137 3.003.403 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.626-5.478 5.92.43.37.812 1.103.812 2.22v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
