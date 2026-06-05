import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      description: "High-performance laptop for work and study.",
      image: "https://cdn-icons-png.flaticon.com/512/689/689396.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      description: "Sleek smartphone with long-lasting battery.",
      image: "https://cdn-icons-png.flaticon.com/512/15/15874.png",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      description: "Comfortable headphones for music and calls.",
      image: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <p className="tagline">Premium Shopping Experience</p>

      <h1>Smart Tech Store</h1>

      <p className="subtitle">
        Discover curated electronics with a polished look, fast checkout,
        and a professional product showcase.
      </p>

      <div className="features">
        <span>🚚 Fast Delivery</span>
        <span>🛡️ Trusted Quality</span>
        <span>🔄 Easy Returns</span>
      </div>

      <h2 className="section-title">Featured Products</h2>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="description">{product.description}</p>

            <h2 className="price">
              ₹{product.price.toLocaleString()}
            </h2>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>🛒 Cart Summary</h2>

        <p>{cart.length} Item(s)</p>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.name}</span>
              <span>₹{item.price.toLocaleString()}</span>
            </div>
          ))
        )}

        <div className="total">
          Total: ₹{total.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default App;