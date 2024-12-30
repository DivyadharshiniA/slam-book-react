import { useState } from "react";
function Cat() {
  let [Count, setCount] = useState(0);
  let [name,setName]=useState("Divya")

  return (
    <div>
      <button onClick={() => setCount(Count + 1)}>++</button>
      <h1>Count: {Count}</h1>
      <button onClick={() => setCount(Count - 1)}>--</button>
      <div>
        <input type="text" placeholder="Enter here" onChange={(e)=> setName(e.target.value)} />
        <h1>Name:{name}</h1>

      </div>
    </div>
    
    
  );
}

export default Cat;
