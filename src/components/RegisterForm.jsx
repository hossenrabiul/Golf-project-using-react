import React, { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = ({ route }) => {
  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setComfirm_password] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // console.log(username, " ", first_name, " ", last_name, " ", email, " ", password, " ", comfirm_password)
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(route, {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
      });
      setError('')
      console.log(res);
      navigate("/login");
    } catch (error) {
      if(error.response.data?.username){
        setError(error.response.data?.username)
      }
      else{
        setError(error.response.data?.non_field_errors)
      }
      
      console.log(error);
    }
  };
  return (
    <div className="bg-sky-50 from-blue-500 to-purple-600 flex items-center justify-center min-h-screen py-16">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Username</label>
            <input
              type="text"
              className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium">
                First Name
              </label>
              <input
                type="text"
                className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFirst_name(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setLast_name(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setComfirm_password(e.target.value)}
              required
            />
          </div>
          <div>
            {error && <p className="text-red-600 font-bold">! {error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-gray-600 mt-3 text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-red-600">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
