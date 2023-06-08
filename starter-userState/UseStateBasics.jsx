import { useState } from "react";


const UseStateBasics = () => {

  const handleClick = ()=> 
  {
      setCount(count+1);
  } 

  const [count, setCount] = useState(0);

  return (
      <div>
          <h3>you clicked {count} times</h3>
          <button type="button" className="btn" onClick={handleClick}>increase</button>
      </div>
  )
}
export default UseStateBasics;