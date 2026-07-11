import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { register } from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      alert("Registration successful!");

      navigate("/login");

    } catch (error) {

      console.error(error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Registration failed.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">

        <div className="flex justify-center mb-4">
          <FaHeart className="text-pink-500 text-5xl" />
        </div>

        <h2 className="text-3xl font-bold text-center text-pink-500">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Join the Pinky Hearts family
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition disabled:bg-pink-300"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?

          <Link
            to="/login"
            className="text-pink-500 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;
