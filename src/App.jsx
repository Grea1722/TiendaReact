import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/cart";

function App() {
  // const [products] = useState(initialProducts);
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />;
      <Footer />
    </CartProvider>
  );
}

export default App;
