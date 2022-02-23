import '../../assets/css/Products.css'

import { useState, useEffect } from 'react';
import DetailProduct from '../products/DetailProduct';

function Products() {
    const [producto, setProducto] = useState([]);
    const [index, setIndex] = useState(1);
    const [total, setTotal] = useState();

    useEffect(() => {
        console.log("Se montó el componente");
        fetch(`https://megatronix-6.herokuapp.com/api/products/${index}`)
            .then(response => response.json())
            .then(data => {
                setProducto(
                    data.product
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
    }, [producto]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);


    let incrementar = () => {
        setIndex(index + 1);
        fetch(`https://megatronix-6.herokuapp.com/api/products/${index}`)
            .then(response => response.json())
            .then(data => {
                setProducto(
                    data.product
                )
            })
    }

    let decrementar = () => {
        setIndex(index - 1);
        fetch(`https://megatronix-6.herokuapp.com/api/products/${index}`)
            .then(response => response.json())
            .then(data => {
                setProducto(
                    data.product
                )
            })
    }

    useEffect(() => {
        console.log("Se montó el componente");
        fetch('https://megatronix-6.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setTotal(
                    data.countProducts
                )
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="products-contain">
            <div className="products-total">
                <h2 className="title">TOTAL PRODUCTOS</h2>
                <p className="total">{total}</p>
            </div>
            <div className="product">
                <DetailProduct nombre={producto.name} id={producto.id} descripcion={producto.description} detalle={producto.detail} imagen={producto.image} />
                <button className="product-boton-avance" onClick={incrementar}></button>
                <button className="product-boton-retroceso" onClick={decrementar}></button>
            </div>


        </div>
    )
}

export default Products;