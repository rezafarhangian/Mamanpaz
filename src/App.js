import { useRoutes } from "react-router-dom"
import routes from './Routes';
import CartProvider from "./Context/CartProvider";
import AuthProvider from "./Context/AuthProvider";

function App() {

  const route = useRoutes(routes)
  return (
    <AuthProvider>
      <CartProvider>
        <div className="font-vazir">
          {route}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
