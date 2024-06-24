import React from "react"
import {useState, useEffect} from "react"
import Cards from './Cards';
import '../css/contador.css';


function Contador() {
    let [cont, setCont] = useState(0);
    const [item, setItem] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProductos(json)); 
    }, []);

    
    let mas = ()=>{
        if (cont < 100){
            setCont(cont++)
        }
        else  {
            setCont(cont = 100)
        }

    }
    let men = ()=>{
        if (cont == 0) {
            cont = 0
        }
        else{
            setCont(cont--)
        }
    }
    useEffect(() => {
        if (cont > -1) {
            setItem(productos.slice(0, cont));
        }
    }, [cont, productos]);

    return (
        <div>
            <div>
                <button className="but" onClick={mas}>aumentar</button>
                <h1>{cont}</h1>
                <button className="but" onClick={men}>decrementar</button>
            </div>
            <div>
                <Cards items={item} />
            </div>
        </div>
    )
}

export default Contador