import Home from "./Pages/Home"
import About from "./Pages/AboutUs"
import Companies from "./Pages/Companies"
import ChefRegistration from "./Pages/ChefRegistration"
import Food from "./Pages/Food"



const routes = [
    
    { path: '/', element: <Home/> },
    { path: '/aboutus', element: <About/> },
    { path: '/companies', element: <Companies/> },
    { path: '/chefRegistration', element: <ChefRegistration/> },
    { path: '/food', element: <Food/> },
]

export default routes