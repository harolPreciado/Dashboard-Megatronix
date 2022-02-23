import '../../assets/css/Total.css'

import { useState, useEffect } from 'react';
import DetailUser from './DetailUser';

function Users() {
    const [usuario, setUsuario] = useState([]);
    const [index, setIndex] = useState(1);
    const [total, setTotal] = useState();

    useEffect(() => {
        console.log("Se montó el componente");
        fetch(`https://megatronix-6.herokuapp.com/api/users/${index}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(
                    data.user
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
    }, [usuario]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);


    let incrementar = () => {
        setIndex(index + 1);
        fetch(`https://megatronix-6.herokuapp.com/api/users/${index}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(
                    data.user
                )
            })
    }

    let decrementar = () => {
        setIndex(index - 1);
        fetch(`https://megatronix-6.herokuapp.com/api/users/${index}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(
                    data.user
                )
            })
    }

    useEffect(() => {
        console.log("Se montó el componente");
        fetch('https://megatronix-6.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                setTotal(
                    data.count
                )
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="total-contain">
            <div className="total-total">
                <h2 className="title">TOTAL USUARIOS</h2>
                <p className="total">{total}</p>
            </div>
            <div className="product">
                <DetailUser nombre={usuario.name} id={usuario.id} email={usuario.email} imagen={usuario.image} />
                <button className="boton-avance" onClick={incrementar}></button>
                <button className="boton-retroceso" onClick={decrementar}></button>
            </div>


        </div>
    )
}

export default Users;