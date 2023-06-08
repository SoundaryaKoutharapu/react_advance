import { useState } from "react"

const CodeExample_UseEffect = () => {
    const[value, setValue] = useState(0);

    const sayHello = () =>
    {
        console.log('hello');
       //  setValue(value+1);   => causes too many re-renders and infinite loop (error)
     }

    sayHello();

  return (
    <div>
        <h3>{value}</h3>
        <button type="button" className="btn" onClick={ () => setValue(value+1) }>increase</button>
    </div>
  )
}
export default CodeExample_UseEffect