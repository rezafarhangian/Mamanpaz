import { useRoutes } from "react-router-dom"
import routes from './Routes';
import CartProvider from "./Context/CartProvider";

function App() {

  const route = useRoutes(routes)
  return (
    <CartProvider>
      <div className="font-vazir">
        {route}
      </div>
    </CartProvider>
  );
}

export default App;
