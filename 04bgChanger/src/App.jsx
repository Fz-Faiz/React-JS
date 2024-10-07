import {useState } from "react";
function App(){
  const [color,setColor] = useState("olive")
  return (

    <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex-wrap justify-center gap-3 shadow-lg  p-1 rounded-3xl bottom-5 bg-gradient-to-b from-blue-300 TO to-pink-500 dark:from-blue-100 dark:to-purple-800">
          <div className=" bg-white rounded-[calc(1.5rem-1px)] p-5">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"lavender"}} onClick={()=>{setColor("lavender")}}>Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg mx-3" style={{backgroundColor:"White"}} onClick={()=>{setColor("White")}}>White</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"Black"}} onClick={()=>{setColor("Black")}}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-3" style={{backgroundColor:"Yellow"}} onClick={()=>{setColor("Yellow")}}>Yellow</button>
          </div>
         
          

        </div>


      </div>

      

    </div>

  )

}
export default App;