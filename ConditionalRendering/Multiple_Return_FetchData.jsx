import { useState, useEffect, isValidElement } from "react"

const url = 'https://api.github.com/users/QuincyLarson';

const Multiple_Return_FetchData = () => {
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const user = response.json();
                console.log(response);
                setUser(user)
                console.log(user);
            }
            catch (error) {
                setError(true)
                console.log(error);
            }
            setLoading(false)
        }

        fetchData();
    }, [])


    if (isLoading) {
        return <h3>Loading....</h3>
    }
    if (isError) {
        return <h3> There was an error</h3>
    }

    const { avatar_url, name, company, bio, id } = user;

    return (
        <div>
            <img style={{ width: '200px', height: '250px', borderRadius: '30px' }} src= "https://avatars.githubusercontent.com/u/985197?v=4"
                alt={id} />
            <h3>{name}</h3>
            <h4>{company}</h4>
            <h4>{bio}</h4>
        </div>
    )
}
export default Multiple_Return_FetchData