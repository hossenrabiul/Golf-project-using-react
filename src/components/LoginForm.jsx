import React, { useState } from "react";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = ({ route}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handlesubmit = async (e)=>{
        e.preventDefault()

        try{
            const res = await api.post(route, {username, password})
            console.log(res)
            console.log(res.data)
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
            setError('')
            navigate('/')
        }catch(error){
           setError(error.response.data.detail)
           console.log(error)
        }

    }
  return (
    <div className="bg-sky-50 from-blue-500 to-purple-600 flex items-center justify-center min-h-screen py-16">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
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
            {
              error && <p className="text-red-600 font-bold">! Please provite your creadentials currectly</p>
            }
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-gray-600 mt-3 text-center">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-red-600">
              {" "}
              Register
            </Link>
          </p>
      </div>

      
    </div>
  );
};

export default LoginForm;
