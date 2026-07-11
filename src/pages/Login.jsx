import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { login } from "../services/api";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await login(form);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data)
            );

            navigate("/dashboard");

        } catch (error) {
            alert("Invalid email or password");
            console.log(error);
        }
    };

    return (

        <div className="min-h-screen bg-pink-50 flex justify-center items-center">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-10">

                <div className="flex justify-center mb-4">

                    <FaHeart className="text-pink-500 text-5xl"/>

                </div>

                <h1 className="text-3xl font-bold text-center text-pink-500">
                    Welcome Back
                </h1>

                <p className="text-gray-500 text-center mt-2">
                    Sign in to continue
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />

                    <button
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-pink-500 ml-2 font-semibold"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default Login;