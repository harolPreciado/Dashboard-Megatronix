import React from 'react'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/css/SideLeft.css'

import { Link } from 'react-router-dom'

function SideLeft() {
    return(
        <div className="side-left">
            <Link to="/products" exact="true"><p>Productos</p></Link><br/>
            <Link to="/users" exact="true"><p>Usuarios</p></Link><br/>
            <Link to="/categories" exact="true"><p>Categorias</p></Link>
        </div>
    )
}

export default SideLeft;
