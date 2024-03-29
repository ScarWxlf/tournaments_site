import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import image from "../../assets/06.jpg";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    await axios
      .post(
        `http://localhost:3004/login`, userData,
      )
      .then((response) => {
        localStorage.setItem("user", response.data[0].id);
        navigate("/");
        window.location.reload();
      }).catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <div className="flex flex-grow items-center justify-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="container items-center flex flex-col mb-32">
        <form
          className="flex flex-col justify-center items-center bg-white gap-8 py-4 px-8 border-black border-2 rounded-md border-opacity-20"
          onSubmit={handleSubmit}
        >
          <h1>Login</h1>
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border border-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 focus:border-2 focus:border-stone-950 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              type="username"
              name="username"
              placeholder=""
              value={data.username}
              onChange={handleChange}
            />
            <label
              htmlFor=""
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-stone-950 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-stone-950 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-stone-950 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Username
            </label>
          </div>
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              className="peer h-full w-full rounded-[7px] border border-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 focus:border-2 focus:border-stone-950 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              type="password"
              name="password"
              placeholder=""
              value={data.password}
              onChange={handleChange}
            />
            <label
              htmlFor=""
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-stone-950 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-stone-950 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-stone-950 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Password
            </label>
          </div>
          <div className="flex flex-col gap-2">
          <button
            className="border px-5 border-gray-500 rounded-lg py-1 duration-300 hover:bg-gray-900 hover:text-white hover:outline-2"
            type="submit"
          >
            Login
          </button>
          <a href="/sign-up" className="pt-1 text-sm text-blue-700">
            Not registered yet?
          </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
