import { useState } from "react"


function App() {
const [list, setList] = useState([ 'Pedro', 'Clara', 'Agnes' ])
const [item, setItem] = useState('')
function addToList() {
setTimeout(() => {
  setList(state => [...state, item] )
}, 500)
}
function removeFromList(item: string) {
  setTimeout(() => {
    setList(state => state.filter(item => item != item))
  })
}
  return (
   <>
   <input placeholder="Novo item"  type='text' value={item} onChange={e => setItem(e.target.value)} />
<button onClick={addToList}>Adicionar</button>
<ul>
  {list.map((item) => <li key={item}> {item} </li>) }
  <button onClick={() => removeFromList (item)}>Remover</button>
</ul>
   </>
  )
}

export default App
