import { Carts } from "./Carts.jsx";
import { Filters } from "./Filters.jsx";
export const Header = () => {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Carts />
      <Filters />
    </header>
  );
};
