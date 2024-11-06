import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../../GlobalContext"
import Ingredients from "../../../Ingredients"

function Details() {


  const {id} = useParams()
 const {recipeDetails , setRecipeDetails , getCurrentItem , favorites} = useContext(GlobalContext)
  useEffect(()=>{
async function getCurrentId() {
  const respone = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
  const result = await respone.json()
  if(result?.data){
    setRecipeDetails(result?.data)
  }
}
getCurrentId() 
  }, [])
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10"> 
      <div className="row-start-2 lg:row-start-auto">
    <div className="h-96 overflow-hidden rounded-xl group">
      <img 
      src={recipeDetails?.recipe?.image_url}
      className="w-full h-full block duration-300 object-cover group-hover:scale-105"
      />
    </div>
      </div>
      <div>
        <span className="text-sm text-cyan-500 font-medium">{recipeDetails?.recipe?.publisher}</span>
      
        <h3 className="text-2xl font-bold truncate text-black"> 
          {
            recipeDetails?.recipe?.title
          }
          </h3>
          <div>
            <button onClick={()=>getCurrentItem(recipeDetails?.recipe)} className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block  shadow-md bg-black text-white">
          {
            favorites.findIndex(item=>item.id===recipeDetails?.recipe?.id) !== -1 ? "Remove from faviort": "Add from faviort"
          }
            </button>
          </div>
          <div>
             <span className="text-2xl text-black font-semibold">Ingredients:</span>
             <ul className="flex flex-col gap-3">
              {
                recipeDetails?.recipe?.ingredients.map((item)=><Ingredients item={item}/>)
              }
             </ul>
          </div>
      </div>
          </div>
  )
}

export default Details