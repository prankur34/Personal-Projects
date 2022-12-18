import React from "react";

function Cards({ data }) {
  const newData = data.slice(3, 5);

  return (
    <div className="flex justify-center items-center">
      {newData.map((item) => {
        return (
          <div class="max-w-sm m-4 w-64 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex p-4">
              <img src={item.image} className="h-12 w-12 mr-4" alt="crypto" />
              <div className="flex flex-col justify-start text-start">
                <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  High: {item.high_24h}
                </p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Price: {item.current_price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
