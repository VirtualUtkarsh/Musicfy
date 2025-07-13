import React, { useContext, useEffect } from "react";
import { SidebarContext } from "../Context/SibebarContext";
import bg from "../assets/bg4.jpg";
import "../utils/style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { showMenu, setShowMenu } = useContext(SidebarContext);

  useEffect(() => {
    if (showMenu) setShowMenu(false);
  }, []);

  const token = localStorage.getItem("access_token") || null;

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center space-y-6 bg-[rgba(0,0,0,0.6)] w-full h-screen lg:space-y-8 px-6">
        <h1 className="text-4xl lg:text-6xl text-white font-extrabold drop-shadow-xl tracking-wide">
          🎧 Musicfy
        </h1>
        <p className="text-white text-xl lg:text-3xl font-medium drop-shadow-md">
          Your gateway to endless music. Stream, upload, and vibe.
        </p>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          {token ? (
            <Link
              to="/upload"
              className="bg-yellow-300 w-36 py-2 rounded-md text-[#461e74] font-semibold shadow hover:scale-105 transition"
            >
              Upload
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-300 w-36 py-2 rounded-md text-[#461e74] font-semibold shadow hover:scale-105 transition"
            >
              Login
            </Link>
          )}
          <Link
            to="/explore"
            className="bg-white w-36 py-2 rounded-md text-[#461e74] font-semibold shadow hover:scale-105 transition"
          >
            Stream
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
