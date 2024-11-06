import UseLocalStorage from "./useLocalStorage"
import {} from "./style.css"

function LightDarkMode() {
  const [theme , setTheme] = UseLocalStorage("theme" , "Dark")

function HandleChangeTheme(){
  setTheme(theme=== "light" ? "Dark":"light")
}

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
    <p>hello world!</p>
    <button onClick={HandleChangeTheme}>change theme</button>
      </div>
      
    </div>
  )
}

export default LightDarkMode