import React, { Component } from 'react'
import routes from './router'
import WrapperComponent from './WrapperComponent'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {
//             routes.map(item => (
//             <li key={item.path}>
//               <NavLink  to={item.path}>{item.title}</NavLink>
//             </li>
//             ))
//           }
//         </ul>
//         <Switch>
//           {
//             routes.map(item => (
//               <Route path={ item.path } render = { () => {
//                 return <item.component routes = {item.children}/>
//               }}/>
//             ))
//           }
//         </Switch>
//       </div>

//     )
//   }
// }

export default class App extends Component {
  render () {
    return (
      <div>
        {WrapperComponent(routes)}
      </div>
    )
  }
}
