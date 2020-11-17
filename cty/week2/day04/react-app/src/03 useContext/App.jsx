import React , {createContext , useContext} from 'react'
const colorContext = createContext()
const ageContext = createContext()
const {Provider , Consumer } = colorContext

const Child = () => {
  const color = useContext(colorContext)
  const age = useContext(ageContext)
  return (
    <h1>1111-{color} -{age}</h1>
    // <Consumer>
    //   {
    //     (value) => {
    //     return (<h1>{value}</h1>)
    //     }
    //   }
    // </Consumer>
  )
}
const Son = () => (<div>
    son
    <ageContext.Provider value='18'>
      <Child/>
    </ageContext.Provider>
  </div>)

function App() {
  return (
    <div>
      <colorContext.Provider value={"green"}>
        App
        <Son />
      </colorContext.Provider>
    </div>
  )
}

export default App
