import React from 'react'

const UseEffectexample = () => {
  const [count , setCount]=React.useState(0)
      React.useEffect(()=>{
          console.log("use effect is Active")
      },[count])
    return (
      <>
      <h1>UseEffect Example</h1>
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Add</button>
      </>
      
    )
  }

export default UseEffectexample