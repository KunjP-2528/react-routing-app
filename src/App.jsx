import Home from "./Pages/Home/Home"
import { PageNotFound } from "./Pages/PageNotFound"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Pages/about/About"
import Form from "./Pages/Form/Form"
import Nav from "./Pages/Navbar/Nav"

const App = () => {
  
  return(
  <div>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="about" element={<About/>}/>
    <Route path ="form" element={<Form/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
