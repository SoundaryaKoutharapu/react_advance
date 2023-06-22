import { useState, useEffect } from "react"

const UserEffectCleanUp = () => {
    const [toggle, setToggle] = useState(null)
    console.log('render');
    return (
        <div>
            <button className="btn" onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <RandomComponent />}
        </div>
    )
}

// const RandomComponent = () => {
//     useEffect(() => {
//         const intid = setInterval(() => {
//             // console.log("hello from interval");
//         }, 1000);

//         // console.log("this is interesting");

//         return () => {
//             clearInterval(intid);
//             console.log('cleanup');
//         }
//     }, [])

//     return (
//         <h3>Hello there!</h3>
//     )
// }

const RandomComponent = () =>
{
    useEffect ( ()=>
    {
        const somefunc = () =>
        {
            //some logic
        }
            window.addEventListener('scroll', somefunc)
            return () => 
            {
                window.removeEventListener('scroll', somefunc)
            } 
    }, [])
    return <h3>Hello there</h3>
}

export default UserEffectCleanUp