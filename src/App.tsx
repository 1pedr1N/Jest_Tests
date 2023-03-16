import { useState } from "react"


function App() {
const [list, setList] = useState([ 'Pedro', 'Clara', 'Agnes' ])
function addToList() {
  setList(state => [...state, 'Novo' ] )
}
  return (
   <>
<button onClick={addToList}>Novo</button>
<ul>
  {list.map((item) => <li key={item}> {item} </li>) }
</ul>
   </>
  )
}

export default App
