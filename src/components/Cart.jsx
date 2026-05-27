import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const checkout = () => {
    alert("Demo checkout complete! Thank you for your order.");

    localStorage.removeItem("cart");

    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#faf7f2] min-h-screen text-[#774b31]">
      <Navbar />

      <div className="px-4 md:px-20 py-10">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-xl">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p>Size: {item.size}</p>

                    <p>Quantity: {item.quantity}</p>

                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-10">
              <h2 className="text-3xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h2>

              <button
                onClick={checkout}
                className="mt-4 bg-[#774b31] text-white px-8 py-3 rounded-lg hover:bg-[#633628] transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;