import Home from "./Pages/Home"
import About from "./Pages/AboutUs"
import Companies from "./Pages/Companies"
import ChefRegistration from "./Pages/ChefRegistration"
import Food from "./Pages/Food"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Cart from "./Pages/Cart"



const routes = [
    
    { path: '/', element: <Home/> },
    { path: '/aboutus', element: <About/> },
    { path: '/companies', element: <Companies/> },
    { path: '/chefRegistration', element: <ChefRegistration/> },
    { path: '/food', element: <Food/> },
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/cart', element: <Cart/> },
]

export default routes