import React , {useMemo , useState} from 'react'

const Child1 = () => {
  console.log('child1111');
  return (<div>child1</div>)
}
const Child2 = () => {
  console.log('child222');
  return (<div>child2</div>)
}

const Parent = (a, b) => {
  const child1 = useMemo(() => <Child1 a={a} /> , [a])
  const child2 = useMemo(() => <Child2 b={b} /> , [b])
  return (
    <>
      {child1}
      {child2}
    </>
  )
  
  
}
function App() {
  const [a , setA] = useState(1)
  const [b , setB] = useState(2)
  return (
    <div>
      <input type='text' value={a} onChange= {(e) => {setA(e.target.value)}}/>
      <input type='text' value={b} onChange= {(e) => {setB(e.target.value)}}/>
      <Parent a = {a} b = {b}/>
    </div>
  )
}

export default App
