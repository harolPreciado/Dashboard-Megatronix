import '../../assets/css/Products.css'

import { useState, useEffect } from 'react';

function Products() {
    const [valor, setValor] = useState([]);

    useEffect(() => {
        console.log("Se montó el componente");
        fetch('https://megatronix-6.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setValor(
                    data.countProducts
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
        console.log(valor);
    }, [valor]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);

    return (
        <div className="products-contain">
            <h2 className="title">TOTAL PRODUCTOS</h2>
            <p>{valor}</p>
        </div>
    )
}

export default Products;