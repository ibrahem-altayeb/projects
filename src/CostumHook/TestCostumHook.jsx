import { useState } from "react";
import FetchData from "./Fetch"
import Teste from "../use-outside-click/test";

function TestCostumHook() {
  const {data, loading, error} = FetchData("https://dummyjson.com/products" , {})

  console.log(data , loading , error );
 
  function handleClick(getCurrentId){
    console.log(getCurrentId);
    
  }
  function scrollDown(){
    window.scrollTo(0, 1000)
    window.scrollTo({
      behavior:"smooth"
    })
  }
  return (
    <div>
      <h1> TestCostumHook</h1>
      <button onClick={scrollDown}> scroll down</button>
      {
        loading? <h1>please wait </h1> : null
      }
      {
        data&& data.products&& data.products.length? 
        data.products.map(item =>
          <div key={item.id} onClick={()=>handleClick(item.id)}>
            <p > {item.title}</p>

          </div>)
          
          :null
      }

<Teste/>
    
    </div>
  )
}

export default TestCostumHook