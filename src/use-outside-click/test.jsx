import { useState } from "react"

function Teste() {
  function handleClickTop(){
    window.scrollTo({
      top:0 , left: 0, behavior : "smooth"
    })
  }
  const [showContent , setShowContent] = useState(false)
  return (
    <div>
      {
        showContent? <h1>this is the content it is true</h1> : <button onClick={()=> setShowContent(prevShow=>!prevShow)}>Show Content</button>
      }
      <button onClick={handleClickTop}></button>
    </div>
  )
}

export default Teste