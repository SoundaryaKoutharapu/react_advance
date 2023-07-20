import { useState, useEffect } from "react"

const ControlledInputs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e)=>
  {
     console.log();
  }

  return (
    <form className="form">
      <h4>ControlledInputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label" value={name} onChange={handleChange}>Name</label>
        <input type="text" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" id="email" className="form-input" />
      </div>
      <button className="btn btn-block" type="submit">submit</button>
    </form>
  )
}
export default ControlledInputs