import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Details from "./Details";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/EFTEKHER/json/main/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products)

  const cartAdd = (_id, name, category, price, rating, img) => {
    console.log("add to cart");
    let c = {
      _id: _id,
      name: name,
      category: category,
      price: price,
      rating: rating,
      img: img,
    };

    let newcart = [...cart, c];
    setCart(newcart);
    console.log(cart);
  };

  const handleSearch=event=>{
    const searchProduct=event.target.value;
    const filteredProduct=products.filter(product=>product.name.includes(searchProduct.toLowerCase()));
  }
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-500 mx-auto underline underline-offset-8 text-center">
          Search your products
        </h1>
        <br />
      </div>
      <div className="w-[60%] flex flex-row lg:flex-nowrap ">
        <input
          type="text" onChange={(e)=>handleSearch(e)}
          placeholder="Enter your product name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[60px]"
        />
        <div className="mt-1 bg-violet-300 m-2 p-3 rounded-md relative">
          <AiOutlineShoppingCart size={30} color="black" />
          <span className="font-bold bg-orange-700 text-white absolute w-6 h-6 rounded-full -top-2 -end-2 text-center">
            {cart.length}
          </span>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          {products.map((product) => {
            return (
              <Products
                key={product._id}
                name={product.name}
                img={product.img}
                rating={product.rating}
                price={product.price}
                category={product.category}
                addTocart={cartAdd}
                _id={product._id}
              />
            );
          })}
        </div>
        {<Details cart={cart} />}
      </div>
    </div>
  );
};

export default Shop;
