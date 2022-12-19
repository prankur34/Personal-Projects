import React from "react";

function Navbar() {
  return (
    <div>
      <nav class=" relative w-full flex flex-wrap items-center justify-between py-2 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            class=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="flex justify-center items-center">
              <span className="material-icons  text-black">menu</span>
              <h1 className=" text-black  font-inter font-bold text-sm ml-2">
                Crypto Tracker
              </h1>
            </div>
          </button>
          <div
            class="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  flex-col pl-0 list-style-none mr-auto">
              <li class="nav-item p-2 flex justify-center items-center">
                <span className="material-icons">
                  <span class="material-icons">currency_bitcoin</span>
                </span>
                <span class="nav-link text-black p-0 font-inter font-bold text-sm leading-9">
                  Crypto Tracker
                </span>
              </li>
            </ul>
          </div>

          <div class="flex items-center relative">
            <span className="material-icons">search</span>
            <span className="material-icons">menu</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
