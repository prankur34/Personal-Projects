import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font z-50 sticky top-0">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Prankur Pandey</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <a class="mr-5 hover:text-gray-200 cursor-pointer">Home</a>
            </Link>
            <Link to="/projects">
              <a class="mr-5 hover:text-gray-200 cursor-pointer">Projects</a>
            </Link>
            <Link to="/blogs">
              <a class="mr-5 hover:text-gray-200 cursor-pointer">Blogs</a>
            </Link>
            <Link to="/resume">
              <a class="mr-5 hover:text-gray-200 cursor-pointer">Resume</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
