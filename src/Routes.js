import Home from "./Pages/Home"
import About from "./Pages/About"
import Companies from "./Pages/Companies"
import ChefRegistration from "./Pages/ChefRegistration"



const routes = [
    
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/companies', element: <Companies/> },
    { path: '/chefRegistration', element: <ChefRegistration/> },
]

export default routes