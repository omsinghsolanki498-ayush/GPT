import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { Toaster, toast } from "react-hot-toast";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {

      const res = await axios.post(
        "http://localhost:3002/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      toast.success(res.data.message);

      navigate("/login");

    } catch (error) {

      toast.error(error.response.data.message);
    }
  };



  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4">

      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#111827] border border-gray-700 rounded-3xl p-10 shadow-2xl"
      >

        {/* LOGO */}
        <div className="flex justify-center mb-6">

          <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            alt="logo"
            className="w-16 h-10 rounded-lg"
          />

        </div>


        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white mb-2">
            Create your account
          </h1>

          <p className="text-gray-400">
            Get started with your free ChatGPT account
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full name"
            name="name"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-transparent border border-gray-700 text-white outline-none focus:border-red-500"
          />

          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-transparent border border-gray-700 text-white outline-none focus:border-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-transparent border border-gray-700 text-white outline-none focus:border-red-500"
          />

          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-transparent border border-gray-700 text-white outline-none focus:border-red-500"
          />

          <button
            className="w-full bg-blue-800 hover:bg-blue-700 transition-all text-white font-semibold py-4 rounded-xl text-lg cursor-pointer"
          >
            Create account
          </button>

        </div>

        <p className="text-center text-gray-400 mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-red-400 ml-2 hover:underline"
          >
            Sign in
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;