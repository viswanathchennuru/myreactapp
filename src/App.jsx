import { useState } from "react";
import laptopImg from "./assets/laptop.svg";
import mobileImg from "./assets/mobile.svg";
import headphonesImg from "./assets/headphones.svg";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: laptopImg,
      description: "High-performance laptop for creative workflows.",
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: mobileImg,
      description: "Sleek smartphone with long-lasting battery.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: headphonesImg,
      description: "Comfortable sound for music and calls.",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Premium shopping experience</span>
          <h1>Smart Tech Store</h1>
          <p>
            Discover curated electronics with a polished look, fast checkout,
            and a professional product showcase.
          </p>
        </div>
        <div className="hero-cta">Fast delivery · Trusted quality · Easy returns</div>
      </header>

      <main className="container">
        <section className="section-header">
          <div>
            <p className="section-label">Featured products</p>
            <h2>Shop the best tech items</h2>
          </div>
          <p className="section-text">
            Add the items you love to the cart and see the total update
            instantly.
          </p>
        </section>

        <div className="content-grid">
          <div className="products">
            {products.map((product) => (
              <article className="card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="card-footer">
                    <span>₹{product.price}</span>
                    <button onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-panel">
            <div className="cart-header">
              <h2>Cart Summary</h2>
              <span>{cart.length} item(s)</span>
            </div>

            {cart.length === 0 ? (
              <p className="empty-state">Your cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div className="cart-item" key={`${item.id}-${index}`}>
                    <span>{item.name}</span>
                    <strong>₹{item.price}</strong>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-total">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;