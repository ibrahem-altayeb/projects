import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext"
import RecipeItem from "../../RecipeItem"

function Favorites() {
  const {favorites} = useContext(GlobalContext)
 
  
   return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        favorites&& favorites.length > 0 ? (

          favorites.map((item)=><RecipeItem item={item}/>)
        )
        :
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold"> save videos</p>
        </div>
      }
    </div>
  )
}

export default Favorites