import {useState} from "react";

function Contador(){
    const [ contador, setContador ] = useState(1);

    function adicionaContador() {
        setContador(contador + 1);
    }

    return(
        <div>
            <h3>Número: { contador }</h3>
            <button onClick={ adicionaContador }>Adicionar mais 1</button>
        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

export default Home