import Home from "./Pages/Home"
import About from "./Pages/About"
import Companies from "./Pages/Companies"



const routes = [
    
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/companies', element: <Companies/> },
]

export default routes