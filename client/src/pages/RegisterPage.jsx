import { useForm } from "react-hook-form";

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <input type="text" {...register("name")}  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Name"/>
                <input type="email" {...register("email")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email"/>
                <input type="password" {...register("password")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password" />
            <button type="submit">
                Register
            </button>
            </form>
        </div>
    );
}

export default RegisterPage