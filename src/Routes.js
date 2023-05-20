import Home from "./Pages/Home"
import About from "./Pages/AboutUs"
import Companies from "./Pages/Companies"
import ChefRegistration from "./Pages/ChefRegistration"
import Foods from "./Pages/Foods"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Cart from "./Pages/Cart"
import Food from "./Pages/Food"



const routes = [
    
    { path: '/', element: <Home/> },
    { path: '/aboutus', element: <About/> },
    { path: '/companies', element: <Companies/> },
    { path: '/chefRegistration', element: <ChefRegistration/> },
    { path: '/foods', element: <Foods/> },
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/cart', element: <Cart/> },
    { path: '/food', element: <Food/> },
]

export default routes