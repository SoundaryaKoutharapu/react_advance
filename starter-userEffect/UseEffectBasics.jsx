import { useState, useEffect } from 'react';


const UseEffectBasics = () => 
{
    const [value, setValue] = useState(0);

    const sayHello = () => 
    {
        console.log('hello');
    }

    sayHello();

    useEffect(() => 
    {
        console.log("hello userEffect")
    }, [])


    return (
        <div>
            <h3>{value}</h3>
            <button type="button" className="btn" onClick={ () => setValue(value+1) }>increase</button>
        </div>
      )
}
export default UseEffectBasics