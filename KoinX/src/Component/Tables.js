import React, { useState } from "react";

function Tables({ pd }) {
  console.log("🚀 ~ file: Tables.js:4 ~ Tables ~ pd", pd);
  let count = 1;
  return (
    <div>
      <h1 className="text-2xl m-4 font-inter font-bold">
        Top 100 Cryptocurrencies by Market Cap
      </h1>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-8">
        <table class="w-full  text-sm text-left text-gray-500">
          <thead class="text-xs  text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="p-4 text-center">
                #
              </th>
              <th scope="col" class="p-4 ">
                NAME
              </th>
              <th scope="col" class="p-4">
                PRICE
              </th>
              <th scope="col" class="p-4">
                <div className="flex justify-start items-center">
                  24H
                  <span class="material-icons text-sm text-indigo-600">
                    arrow_downward
                  </span>
                </div>
              </th>
              <th scope="col" class="p-4">
                7D
              </th>
              <th scope="col" class="p-4">
                MARKET CAP
              </th>{" "}
              <th scope="col" class="p-4">
                VOLUME(24H)
              </th>
              <th scope="col" class="p-2">
                CIRCULATING SUPPLY
              </th>
            </tr>
          </thead>

          {pd.map((pd) => {
            return (
              <tbody>
                <tr class="bg-white border-b  hover:bg-gray-50 ">
                  <th
                    scope="row"
                    class="p-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex justify-center items-center">
                      <span class="material-icons text-xl mr-4 font-600 text-gray-400">
                        star_border
                      </span>
                      {count++}
                    </div>
                  </th>
                  <th
                    scope="row"
                    class="p-4 flex justify-start items-start font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="h-6 w-6 mr-2 "
                      src={pd.image}
                      alt="cryptos"
                    />
                    {pd.name}
                  </th>
                  <td class="p-2 text-black">${pd.current_price}</td>
                  <td class="p-2 text-black">
                    <div className="flex justify-start items-center">
                      <span class="material-icons font-800 text-red-600 ">
                        arrow_drop_down
                      </span>
                      {Math.round(pd.price_change_percentage_24h_in_currency)}%
                    </div>
                  </td>
                  <td class="p-2  text-black">
                    <div className="flex justify-start items-center">
                      <span class="material-icons font-800 text-green-500">
                        arrow_drop_up
                      </span>
                      {Math.round(pd.price_change_percentage_7d_in_currency)}%
                    </div>
                  </td>
                  <td class="p-2 text-black">${pd.market_cap}</td>{" "}
                  <td class="p-2 text-black">${pd.total_volume}</td>
                  <td class="p-2 text-black">
                    {pd.circulating_supply} BTC
                    <svg
                      width="160"
                      className="mt-2"
                      height="6"
                      viewBox="0 0 160 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 3C0 1.34315 1.34315 0 3 0H157C158.657 0 160 1.34315 160 3C160 4.65685 158.657 6 157 6H3C1.34315 6 0 4.65685 0 3Z"
                        fill="#EFF2F5"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Tables;
