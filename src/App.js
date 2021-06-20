import React, { useState } from "react"
import "./index.css"

function App(props) {

  const color=['cornflowerblue','blue','green','yellow','violet','orange','pink','dodgerblue','white','red','darkgrey']

  let j=Math.floor((Math.random() * 10) + 1);
  const [c,setc]=useState(color[j])
  const [q,setq]=useState(props.quotes[j].quote)
  const [a,seta]=useState(props.quotes[j].author)
  


const changeTitles =()=>{
  let i=Math.floor((Math.random() * 10) + 1);
  console.log(i)
  setq(props.quotes[i-1].quote)
  seta(props.quotes[i-1].author)
  setc(color[i])
   
}


  return(
    <div className="color" style={{'background-color':c}}>
    <div className="card">
      <div className="card2">
      <h1 className="mm"><q>{q}</q></h1>
      <h3>-{a}</h3>
      <div className="bottom">
        <div className="bb">
        <button className="button b2"><a href="https://www.linkedin.com/in/monish-prasad-952a17206/">Linkdin</a>&nbsp;<i class="ri-linkedin-box-fill"></i></button>
        <button className="button b2"><a href="https://github.com/monu201">Github</a>&nbsp;<i class="ri-github-fill"></i></button>
        </div>
     
      <button  className ="button" onClick={changeTitles}><p>New quote</p>  </button>
      </div>
      </div>
    </div>
    </div>
    
  )

}

export default App;

