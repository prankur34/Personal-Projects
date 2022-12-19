import React from "react";

function Options() {
  return (
    <div className="flex justify-start items-center ">
      <span class="p-2  ml-4 rounded-md  text-black bg-gray-200  text-xs font-semibold flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
        <span class="material-icons text-xs font-600">star_border</span>
        Favorites
      </span>{" "}
      <span class="p-2 ml-4 rounded-md text-black bg-gray-200  text-xs font-semibold flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
        CryptoCurrencies
      </span>{" "}
      <span class="p-2 rounded-md ml-4 text-black bg-gray-200  text-xs font-semibold flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
        DeFi
      </span>{" "}
      <span class="p-2 rounded-md ml-4 text-black bg-gray-200  text-xs font-semibold flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
        NFT & Collectibles
      </span>
    </div>
  );
}

export default Options;
