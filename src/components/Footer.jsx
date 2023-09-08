import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export const Footer = () => {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/* <h4>
        Prueba tecnica en React ⚛️-<span> @A.Sol</span>
      </h4>
      <h5>Shopping cart con useContext y reducer</h5> */}
    </footer>
  );
};
