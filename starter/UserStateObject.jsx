import { useState } from "react"

const UserStateObject = () => 
{
    // using object
    const [person, setPerson] = useState({
        name: 'hima',
        age: '19',
        hobby: 'gardening'
    })

    /*
    const [name, setName] = useState('Hima');
    const [age, setAge] = useState('24');
    const [hobby, setHobby] = useState('Reading Books');
    */

    const displayPerson = () =>
    {
       /* -- we can modify / overwrite statements -- 
        setPerson('hello')
        setPerson({name:'hello'})
        setPerson({name: 'soundarya', age: '20', hobby: 'playing'})
       */
      setPerson({...person, name:'john'})
    }

  return (
    <>
    <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.hobby}</h3>
    </div>
    <button type="button" className="btn" onClick={displayPerson}>Show Soundarya</button>
    </>
  )
}
export default UserStateObject