import { useState, useEffect } from "react"

const Multiple_Return = () => 
{
    const [isLoading, setLoading] = useState(false)

    useEffect( () =>
    {
        setTimeout(() =>
        {
            setLoading(false)
        }, 5000)
    }, [])

    if(isLoading)
    {
        return <h3>Loading...</h3>
    }
    return <h4>Multiple Returns</h4>
}
export default Multiple_Return