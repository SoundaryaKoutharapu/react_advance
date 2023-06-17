import { useState } from "react"

const UserChallenge = () => {
    const [user, setUser] = useState(null)

    const login = () => {
        setUser({ name: 'hima' })
    }

    const logout = () => {
        setUser(null)
    }


    return (
        <div>
            {user ? 
            <div>
               <h3> you have already logged in</h3>
               <button className="btn" onClick={logout}>logout</button>
            </div> : 
            <div>
                <h3>Please Login</h3>
                <button className="btn" onClick={login}>Login</button>
            </div>}
        </div>
    )
}
export default UserChallenge