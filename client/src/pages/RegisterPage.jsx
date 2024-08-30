import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: RegistroErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tarea");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    signup(data);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        RegistroErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("name", { required: "Nombre es requerido" })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          {...register("email", { required: "Email es requerido" })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", { required: "La contraseña es requerida" })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
