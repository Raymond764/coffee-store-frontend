import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        size: "Small",
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />

      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">{product.description}</p>

      <p className="text-[#774b31] font-semibold mb-4">
        ${product.price.toFixed(2)}
      </p>

      <div className="flex justify-center gap-2">
        <button
          onClick={addToCart}
          className="bg-[#774b31] text-white px-2 py-2 rounded hover:bg-[#633628] transition"
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="bg-gray-200 text-[#774b31] px-2 py-2 rounded hover:bg-gray-300 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;