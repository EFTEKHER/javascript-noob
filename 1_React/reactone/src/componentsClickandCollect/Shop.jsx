import React from "react";

const Shop = () => {
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-500 mx-auto underline underline-offset-8 text-center">
          Search your products
        </h1>
        <br />
        
      </div>
      <div className="w-[60%]">
      <input
          type="text"
          placeholder="Enter your product name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Shop;
