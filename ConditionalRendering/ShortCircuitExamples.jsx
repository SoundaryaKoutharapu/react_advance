import { useState, useEffect } from "react"

const ShortCircuitExamples = () => 
{
    // falsy
    const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);


  return (
    <div>
        <h3>{text || 'default value'}</h3>
        <h3>{name || 'default value'}</h3>

        <h3>{!name && <div>
            <h2>However return</h2>
            <h2>{name}</h2>
        </div> }</h3>

        {user && <SomeComponent name={user.name} />}
        <h4 style={{margin:'3rem'}}>Terinary Operator</h4>
        <button style={{color:'white', backgroundColor:'blue', padding:'1rem'}}>{isEditing? 'edit' : 'add'}</button>

         {user ? <div> <h2>However return {user.name}</h2> </div> : <h5>you need to login</h5> } 
    </div>
  )
}

const SomeComponent = ({name}) =>
{
  return (
  <div>
           <h2>However return</h2>
            <h2>{name}</h2>
    </div>  
  )  
}


export default ShortCircuitExamples