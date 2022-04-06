import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      //error.message
      // if (error.code === "auth/internal-error") setError("correo invalido");
      // setError(error.message);
      setError("ocurrio un error");
    }
  };

  const handleGoogleSignin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("pleace enter your email");
    try {
      await resetPassword(user.email);
      setError("we sent you an email with  a link to reset your password");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-grey-700 text-sm font-fold md-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="youemail@company.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="*****"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <input
            type="submit"
            value="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-non focus:shadow-outline"
          />
          <a
            href="#!"
            className="inline-block align-beseline font-bold text-sm text-blue-500 hover:text-blue-800 "
            onClick={handleResetPassword}
          >
            forgot your password
          </a>
        </div>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-700">
          Register
        </Link>
      </p>

      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleSignin}
      >
        login with google
      </button>
    </div>
  );
}

export default Login;
