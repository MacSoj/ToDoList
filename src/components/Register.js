import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100"
      >
        <h1 className='text-5xl font-semibold text-violet-500'>Hola</h1>
        <p className='text-2xl font-semibold text-gray-200'>Empecemos a crear tu cuenta</p>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-lg font-medium text-violet-500"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border-2 border-violet-500 rounded-xl p-4 mt-1 bg-transparent text-violet-500"
            placeholder="email@company.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-lg font-medium text-violet-500"
          >
            Contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full border-2 border-violet-500 rounded-xl p-4 mt-1 bg-transparent text-violet-500"
            placeholder="*************"
          />
        </div>

        <div className='mt-8 flex flex-col gap-y-4'>
          
        <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 border-2 border-violet-500 rounded-xl text-gray-700 font-semibold text-lg'
            type="submit">
          Registrar
        </button>
        </div>

        <div className='mt-4 flex justify-center items-center'>
          <p>
          <Link to="/login" className="text-sm flex justify-center px-3 text-violet-500 font-bold">
            Iniciar sesion
          </Link>
          </p> 
        </div>

      </form>

    </div>
  );
}