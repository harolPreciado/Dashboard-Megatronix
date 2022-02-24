import '../../assets/css/Total.css'

import { useState, useEffect } from 'react';
import DetailCategory from '../categories/DetailCategory';

function Products() {
    const [categoria, setCategoria] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        console.log("Se montó el componente");
        fetch(`https://megatronix-6.herokuapp.com/api/products`)
            .then(response => response.json())
            .then(data => {
                setCategoria(
                    data.countByCategory
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
    }, [categoria]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);

    useEffect(() => {
        console.log("Se montó el componente");
        fetch('https://megatronix-6.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setTotal(
                    data.countCategories
                )
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="total-contain">
            <div className="total-total">
                <h2 className="title">TOTAL CATEGORIAS</h2>
                <p className="total">{total}</p>
            </div>
            <div className="categories">
            {
                    categoria.map((categoria) => {
                        return (
                            <DetailCategory nombre={categoria.Category} id={categoria.idCategory} cantidad={categoria.Count}/>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Products;