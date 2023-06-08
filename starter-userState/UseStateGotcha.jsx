import { useState } from "react"

const UseStateGotcha = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => 
    {
         /*  
         setValue((currentState) =>
         {
          
            const newState = currentState +1
            console.log(currentState);
            return newState;

         }
       */   
            setTimeout(() =>
            {
                console.log("clicked");
                //setValue(value+1) -> not synchronous with button clicks
                setValue((value) =>   /// synchronous with button clicks
                {
                    return value+1;
                })         
            }, 3000)
    }

    return (
        <div>
            <h3>{value}</h3>
            <button type="button" className="btn" onClick={ handleClick }>Increase</button>
        </div>
    )
}
export default UseStateGotcha;