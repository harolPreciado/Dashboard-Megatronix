import React from 'react'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/css/SideLeft.css'

import { Link } from 'react-router-dom'

function SideLeft() {
    return(
        <div className="side-left">
            <p>
            <Link to="/products" exact="true">Productos</Link>
            </p><br/>
            
            <p>
            <Link to="/users" exact="true">Usuarios</Link>
            </p><br/>

            <p>
            <Link to="/categories" exact="true">Categorias</Link>
            </p>
        </div>
    )
}

export default SideLeft;
