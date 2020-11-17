import React , { useState} from 'react'


// function App() {
//   const [count , setCount ] = useState({
//     num : 0
//   }) 
//   return (
//     <div>
//       <button onClick = {() => setCount({...count , num : count.num - 1})}>-</button>
//       {count.num}
//       <button onClick = {() => setCount({...count , num: count.num + 1})}>+</button>
//     </div>
//   )
// }

function App () {
  const [age , setAge] = useState(22)
  const [obj , setObj] = useState({
    username : '',
    password : ''
  })

  function inputHandler(e){
    // console.log(e.target.value);
    setObj (() => {
      return {...obj , [e.target.name] : e.target.value}
    })
  }
    return (
      <>
        <button onClick = {() => setAge(age - 1)}>-</button>
        {age}
        <button onClick = {() => setAge(age + 1)}>+</button>
        <hr/>
        <input type='text' name='username' value={obj.username} onChange={inputHandler}/>
        <input type='password' name='password' value={obj.password} onChange={inputHandler}/>
      </>
    )
}

export default App
