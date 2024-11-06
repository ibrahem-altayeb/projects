import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext"
import RecipeItem from "../../RecipeItem"
function Home() {
  const {recipesList , loding} = useContext(GlobalContext)
  if(loding){
    return <div>loding... please wait</div>
  }
  
   return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        recipesList&& recipesList.length > 0 ? (

          recipesList.map((item) => <RecipeItem item={item}/>)
        )
        :
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold"> Nothing to show . please search something</p>
        </div>
      }
    </div>
  )
}

export default Home