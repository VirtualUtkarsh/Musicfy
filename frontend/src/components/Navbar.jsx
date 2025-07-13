import React, { useContext } from "react";
import { SidebarContext } from "../Context/SibebarContext";
import { Link, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { ImBlog } from "react-icons/im";
import { TfiWrite } from "react-icons/tfi";
import { CgPlayList } from "react-icons/cg";
import { GiMusicSpell } from 'react-icons/gi';
import { BiWindowClose } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

import "../utils/style.css";
import Logo from "../assets/Logo";

const Navbar = () => {
  const sideBar = useContext(SidebarContext);
  const toggleMenu = () => sideBar.setShowMenu(!sideBar.showMenu);
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <header className="z-50 w-full sticky top-0 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-800 text-white shadow-lg font-space">
      <nav className="w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          🎧 Musicfy
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-200 hover:text-white hover:bg-gray-700 rounded-md transition"
          aria-label="Toggle Menu"
        >
          <FiMenu size={24} />
        </button>

        {/* ---- Mobile Nav ---- */}
        <div
          className={`lg:hidden text-lg fixed top-0 right-0 h-screen w-64 bg-gray-900 z-50 p-6 pt-20 space-y-6 transition-transform duration-300 ease-in-out ${
            sideBar.showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link to="/" className="flex items-center space-x-2">
            <GoHome />
            <span>Home</span>
          </Link>
          <Link to="/explore" className="flex items-center space-x-2">
            <GiMusicSpell />
            <span>Songs</span>
          </Link>
          <Link to="/upload" className="flex items-center space-x-2">
            <TfiWrite />
            <span>Upload</span>
          </Link>
          <Link to="/playlists" className="flex items-center space-x-2">
            <CgPlayList />
            <span>Playlist</span>
          </Link>

          {token ? (
            <button
              onClick={logOut}
              className="bg-yellow-400 text-red-800 px-4 py-1 rounded-lg shadow hover:scale-105 transition"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-yellow-400 text-red-800 px-4 py-1 rounded-lg shadow hover:scale-105 transition"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-red-800 px-4 py-1 rounded-lg shadow hover:scale-105 transition"
              >
                Sign Up
              </Link>
            </>
          )}

          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-red-400 mt-6"
          >
            <BiWindowClose />
            <span>Close</span>
          </button>
        </div>

        {/* ---- Desktop Nav ---- */}
        <div className="hidden lg:flex space-x-10 text-white text-lg">
          <Link to="/" className="flex items-center space-x-2 hover:underline">
            <GoHome />
            <span>Home</span>
          </Link>
          <Link to="/explore" className="flex items-center space-x-2 hover:underline">
            <ImBlog />
            <span>Songs</span>
          </Link>
          <Link to="/upload" className="flex items-center space-x-2 hover:underline">
            <TfiWrite />
            <span>Upload</span>
          </Link>
          <Link to="/playlists" className="flex items-center space-x-2 hover:underline">
            <CgPlayList />
            <span>Playlists</span>
          </Link>

          {token ? (
            <button
              onClick={logOut}
              className="bg-yellow-400 text-red-800 px-4 py-1 rounded-lg shadow hover:scale-105 transition"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-yellow-400 text-red-800 px-4 py-1 rounded-lg shadow hover:scale-105 transition"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-red-800 px-4 py-1 rounded-lg shadow hover:scale-105 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
