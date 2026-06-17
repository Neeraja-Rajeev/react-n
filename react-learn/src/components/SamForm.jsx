import React from 'react'

const SamForm = () => {
  return (
   <>
   <h1>FORM TASK</h1>
   <form>
    <label htmlfor="username">Username:</label>
    <input type="text" id="username" name="username"/>
    <br/>
    <label htmlfor="email">Email:</label>
    <input type="email" id="email" name="email"/>
    <br/>
    <label htmlfor="password">Password:</label>
   <input type="password" id="password" name="password"/>
   <br/>
   <label htmlfor="confirm password">Confirm password:</label>
   <input type="confirm password" id="confirm password" name="confirm password"/>
   <br/>
   <button type="submit">Submit</button>   
   </form>
   </>
  )
}

export default SamForm