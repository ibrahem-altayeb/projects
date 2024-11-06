// import LightColor from "./LightDark"
// import GettingCod from "./qr-code-generator"
// import AppS from "./TestTailwind/App"

import { Route, Routes } from "react-router-dom"
import Home from "./pageStore/Home"
import Cart from "./pageStore/Cart"
import Header from "./ComponentStor/Header"
import Clothes from "./pageStore/Clothes"

// import Colors from "../public/Color/Colors"
// import TestCostumHook from "./CostumHook/TestCostumHook"
// import Search from "./Countryies/search"

// import FeatureFlagContext, { FlagContext } from "./context/Flag"
// import Test from "./context/Test"

// import GithubProfile from "./Github_Profile"
// import Index from "./search-auto"
// import FilterData from "./search-auto"
// import TapTest from "./Taps/TapTest"




// import TakeImage from "./Components/accordian/image_slider"
// import Container from "./Container"
function App() {
 
  return (
    <div>
   {/* <TakeImage/> */}
{/* <TreeView menu={menus}/> */}
{/* <GettingCod/> */}
{/* <LightColor/> */}
{/* <TapTest/> */}
{/* <GithubProfile/> */}
{/* <FilterData/> */}
{/* <Index/> */}
{/* <FeatureFlagContext>
  <Test/>
</FeatureFlagContext> */}
{/* <TestCostumHook/> */}
{/* <Colors/> */}
{/* <Search/> */}
{/* <AppS/> */}
{/* <Container/> */}
<Header/>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route  path="/item-shop/:id" element={<Cart/>}/>
  <Route path="/best" element={<Clothes/>}/>
</Routes>
    </div>
  )
}

export default App