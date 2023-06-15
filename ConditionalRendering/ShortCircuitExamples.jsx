import { useState, useEffect } from "react"

const ShortCircuitExamples = () => 
{
    // falsy
    const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);


  return (
    <div>
        <h3>{text || 'default value'}</h3>
        <h3>{name || 'default value'}</h3>
        <h3>{!name && <div>
            <h2>However return</h2>
            <h2>{name}</h2>
        </div> }</h3>
    </div>
  )
}
export default ShortCircuitExamples