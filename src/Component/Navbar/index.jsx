import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../GlobalContext"

function Navbar() {
  const {input, setInput , handleFetch} = useContext(GlobalContext)
 
  
  return (
    <div>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row">
        <h2 className="text-2xl font-semibold">
        <NavLink to={"/"} >FoodRecipe</NavLink>
          </h2>
        <form onSubmit={handleFetch}>
          <input
          type="text"
          name="search"
          placeholder="Enter item..."
          value={input}
          onChange={(event)=>setInput(event.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          />
        </form>
        <ul className="flex gap-5">
      <li>
        <NavLink to={"/"} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
      </li>
      <li>
        <NavLink to={"/Favior"} className="text-black hover:text-gray-700 duration-300">Favior</NavLink>
      </li>

        </ul>

      </nav>
    </div>
  )
}

export default Navbar