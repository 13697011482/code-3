import React, { useState , useEffect } from 'react'


// export default class App extends Component {
//   state = {
//     count : 1
//   }
//   componentDidMount () {
//     const {count } = this.state
//     document.title = 'componentDidMount' + count
//     this.timer = setInterval(() => {
//       this.setState(({count}) => ({
//         count : count + 1
//       }))
//     } , 1000)
//   }
//   componentDidUpdate() {
//     const { count } = this.state;
//     document.title = "componentDidMount" + count;
//   }
//   componentWillUnmount() {
//     document.title = "componentWillUnmount";
//     clearInterval(this.timer);
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         Count:{count}
//         <button onClick={() => clearInterval(this.timer)}>clear</button>
//       </div>
//     );
//   }
// }
function App () {
  const [proList , setProList] = useState([])
  useEffect(() => {
    fetch('/pro.json').then(res => res.json()).then(result => {
      console.log(result);
      setProList(result.result)
    })
  } , [])
  // useEffect(() => {
  //   return () => {
  //     console.log('componentwillUnmount');
  //   }
  // })
  return (
    <div>
      <ul>
        {/* {
          proList && proList.map((item , index) => {
            return (
            <li key= {index}>{item.positionName}</li>
            )
          })
        } */}
      </ul>
    </div>
  )
}
export default App