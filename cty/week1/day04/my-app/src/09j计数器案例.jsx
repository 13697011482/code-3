// import React, { useState } from 'react'
// const App = () => {
//   const [count , addHandler] = useState(10)
//   const ClickHandler = () => {
//     addHandler(count + 1)
//   }
//   return (
//   <button onClick = {ClickHandler}>{count}</button>
//   )
// }
// export default App


import React  , {useState} from 'react'

const App = () => {
  const [count , setCount] = useState(10)
  const clickHandler = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick = {clickHandler}> { count} </button>
      <button onClick = {() => {
        setCount(count + 10)
      }}> { count} </button>
    </>
  )
}
export default App