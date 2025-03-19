import { useState } from "react"

function App(){

   const [nome, setNome] = useState('Neymar Junior')

  return (
     <div>
        <h3> Pizzaria 2c </h3>
        <input
          className="nome" 
          onChange={(e)=>{setNome(e.target.value)}} 
          name="nome"
          type="text" />

        <button
        onClick={()=>{alert(nome)}}
        className="botao">
          Clique Aqui
        </button>

     </div>

    )
}
export default App
