import { people } from "../data";
import { data } from "../data"
import { useState } from "react";

 const UserStateArray = () => 
{
    const [people, setPeople] = useState(data);

     const remove =(id) =>
     {
       // const newPeople = people.filter((person) => person.id !==id );
        setPeople(people.filter((person) => person.id !==id ))
     }   

     const clearALLItems =() =>
     {
        setPeople([]); //empty array
     }

  return (
        <div>
            {people.map((person) => {
                const {id, name} = person
               // console.log(person);
                return <div key={id}>
                   <h3> {name}</h3>
                   <button type="button"className="btn" onClick={()=>remove(id)}>Remove</button>
                </div>
            })}

             <button type="button" className="btn" onClick={clearALLItems} style={{marginTop:'30px'}}>ClearALLItems</button>
        </div>
  )
}

export default UserStateArray;