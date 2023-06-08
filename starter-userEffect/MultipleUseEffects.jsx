import { useState, useEffect } from "react"

const MultipleUseEffects = () => 
{
    const [value, setValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

useEffect( () =>
{
    console.log("hello")
},[value]);

useEffect( () =>
{
    console.log("hello there")
},[ secondValue] );


    return (
        <div>
            <h3>{value}</h3>
            <button type="button" className="btn" onClick={() => setValue(value + 1)}>Value</button>

            <h3>{secondValue}</h3>
            <button type="button" className="btn" onClick={() => setSecondValue(secondValue + 1)}>SecondValue</button>
        </div>
    )
}
export default MultipleUseEffects