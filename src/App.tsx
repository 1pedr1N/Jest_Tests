import { useState } from "react"


function App() {
const [list, setList] = useState([ 'Pedro', 'Clara', 'Agnes' ])
const [item, setItem] = useState('' )
function addToList() {
  setList(state => [...state, item] )
}
  return (
   <>
   <input placeholder="Novo item"  type='text' value={item} onChange={e => setItem(e.target.value)} />
<button onClick={addToList}>Adicionar</button>
<ul>
  {list.map((item) => <li key={item}> {item} </li>) }
</ul>
   </>
  )
}

export default App
