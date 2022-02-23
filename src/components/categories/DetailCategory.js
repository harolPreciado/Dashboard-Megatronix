import '../../assets/css/Detail.css'
function DetailProduct(props) {
    return(
        <div>
            <article className="Category">
                <label className="keyText">Id: </label><label>{props.id}</label><br />
                <label className="keyText">Nombre: </label><label>{props.nombre}</label><br />
                <label className="keyText">Cantidad: </label><label>{props.cantidad}</label><br />
            </article>
        </div>
    )
}

export default DetailProduct;