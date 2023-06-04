import { people } from "../data";
import { data } from "../data"
import { useState } from "react";

 const UserStateArray = () => 
{
    const [people, setPeople] = useState(data);

  return (
        <div>
            {people.map((person) => {
                const {id, name} = person
               // console.log(person);
                return <div key={id}>
                   <h3> {name}</h3>
                </div>
            })}
        </div>
  )
}

export default UserStateArray;