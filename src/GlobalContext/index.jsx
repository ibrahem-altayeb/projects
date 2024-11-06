import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
  const [input, setInput] = useState("")
  const [loding, setLoding] = useState(false)
  const [recipesList, setRecipesList] = useState([])
  const [recipeDetails , setRecipeDetails] = useState(null)
  const [favorites  , setFavorites] = useState([])

const navigate = useNavigate()
async function handleFetch(event) {
  event.preventDefault()
  try{
    setLoding(true)
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}`)
    const result = await res.json()
if(result?.data?.recipes){
    setRecipesList(result?.data?.recipes)
    setLoding(false)
    setInput("")
    navigate("/")
}
    
  }catch(e){
    console.log(e);
    setLoding(false)
    setInput("")
  }
}

function getCurrentItem(item){
  let copy = [...favorites];
  const index = copy.findIndex(items=>items.id===item.id)
  
  if(index === -1){
    copy.push(item)
   }else{
    copy.splice(index)
   }
   setFavorites(copy)
}

console.log(favorites);

  return <GlobalContext.Provider value={{ input, loding , recipesList, setInput , handleFetch  , recipeDetails , setRecipeDetails ,favorites  , setFavorites , getCurrentItem}}>
      {children}
    </GlobalContext.Provider>
  
}
