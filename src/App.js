import {useRoutes} from "react-router-dom"
import routes from './Routes';

function App() {

   const route = useRoutes(routes)
  return (
    <div className="font-vazir">
      {route}
    </div>
  );
}

export default App;
