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
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="tagline">Premium Shopping Experience</p>
        <h1>Smart Tech Store</h1>
        <p className="subtitle">
          Discover curated electronics with a polished look, fast checkout, and a
          modern shopping layout.
        </p>
        <div className="features">
          <span>🚚 Fast Delivery</span>
          <span>🛡️ Trusted Quality</span>
          <span>🔄 Easy Returns</span>
        </div>
      </header>

      <main className="dashboard">
        <section className="product-panel">
          <div className="panel-header">
            <h2>Featured Products</h2>
            <p>Choose your favorite tech and add it to your cart.</p>
          </div>

          <div className="products">
            {products.map((product) => (
              <article className="card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <div className="price-block">
                    <span className="price">₹{product.price.toLocaleString()}</span>
                  </div>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="cart-panel">
          <div className="panel-header">
            <h2>Cart Summary</h2>
            <p>{cart.length} item(s) selected</p>
          </div>

          {cart.length === 0 ? (
            <p className="empty-state">Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item, index) => (
                <div className="cart-item" key={`${item.id}-${index}`}>
                  <span>{item.name}</span>
                  <span>₹{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}

          <div className="total">
            <span>Total</span>
            <strong>₹{total.toLocaleString()}</strong>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
