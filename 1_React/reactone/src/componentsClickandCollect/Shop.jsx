import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Details from "./Details";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const[inputs,setInput]=useState(false);
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
    
  };
  console.log(searchProduct)

  const handleSearch=event=>{
    const searchProduct=event.target.value;
    const filteredProduct=products.filter(product=>product.name.toLowerCase().includes(searchProduct.toLowerCase()));
    console.log(filteredProduct.length);
    setSearchProduct(filteredProduct);

  }
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
     {/*search products start*/}
      <div>
        <h1 className="text-2xl font-bold text-gray-500 mx-auto underline underline-offset-8 text-center">
          Search your products
        </h1>
        <br />
      </div>
      <div className="w-[60%] flex flex-row lg:flex-nowrap ">
        <input
          type="text" onChange={(e)=>handleSearch(e)} onClick={()=>setInput((prev)=>!prev)}
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
       {/*search products end*/}

        {/*show products start*/}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 order-2 lg:order-1">
          {
            inputs===false?(products.map((product) => {
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
            })):(searchProduct.map(product=>{
              return  <Products
              key={product._id}
              name={product.name}
              img={product.img}
              rating={product.rating}
              price={product.price}
              category={product.category}
              addTocart={cartAdd}
              _id={product._id}
            />
            }))
          }
        </div>
          {/*show products end*/}
       <div className="sm:order-1 lg:order-2">
       {<Details cart={cart} />}
       </div>
      </div>
    </div>
  );
};

export default Shop;
