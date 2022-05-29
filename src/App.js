import { useRef, useState } from "react";
import Checkout from "./Components/Checkout";
import Final from "./Components/Final";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navi from "./Components/Navi";
let d=[];
function App() {
  const[page,setPage]=useState('home')
  const [cart,setCart]=useState(0);
  d=cart===0?[]:d;
  return (<>
    <Navi cartItems={cart} option={(s)=>setPage(s)}/>
    {page==='home'?<Home/>:page==='menu'?<Menu cartItem={(data)=>{
     d.push(data)
     d=Array.from(new Set(d.map(JSON.stringify))).map(JSON.parse)
      setCart(d.length)
      console.log(d)
    }}/>:page==='checkout'?<Checkout checkout={(s)=>{
      setPage(s);
    }} c={d} click={(item)=>{
      d.splice(d.indexOf(item),1);
      setCart((prev)=>prev-1)
    }}/>:<Final items={d}/>}
    </>
  );
}

export default App;
