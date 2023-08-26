import { useId, useState } from "react";
import "./Filters.css";

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFIlterId = useId(0);
  const categoryFilterId = useId(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFIlterId}>Price</label>
        <input
          type="range"
          id={minPriceFIlterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={minPriceFIlterId}>Categoria</label>
        <select id={minPriceFIlterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};
