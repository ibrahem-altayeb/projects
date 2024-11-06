import {Routes , Route} from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./pages/home"
import Details from "./pages/home/details"
import Favorites from "./Pages/Favior"
function Container() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
    <Navbar/>
    <Routes>
      <Route
      path="/"
      element={<Home/>}
      />
      <Route
      path="/Favior"
      element={<Favorites/>}
      />
    
      <Route
      path="/recipe-item/:id"
      element={<Details/>}
      />
    </Routes>



      </div>
    </div>
  )
}

export default Container