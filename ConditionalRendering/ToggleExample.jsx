import { useState } from "react"

const ToggleExample = () => {
    const[showAlert, setAlert] = useState(false)

// const toggleButton = () =>
// {
//     if(showAlert)
//     {
//         setAlert(false)
//         return
//     }
//     setAlert(true)
// }

  return (
    <div>
        <button className="btn" onClick={() =>setAlert(!showAlert)}>Toggle Button</button>
        {showAlert && <Alert/>}
    </div>
  )
}


const Alert = ()=>
{
    return (
        <div className="alert alert-danger"> This is a alert signal </div>
    )
}


export default ToggleExample