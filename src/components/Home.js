import '../assets/css/Home.css'
function Home() {
    return (
        <div className="home-container">
            <h2>¡Megatronix te da la bienvenida!</h2><br></br>
            <span>
                En este espacio encontrarás información general respecto a nuestro sitio web <a href="https://megatronix-6.herokuapp.com/">Megatronix</a>, 
                informacion como total de productos, usuarios y categorias de productos, además podrás consultar 
                detalles generales de productos y usuarios.<br></br> 
                
            </span>
            <p>esta página ha sido creada hacieno uso del entorno Node.JS y la libreria React.JS <br></br></p>
            <h4>Esperamos que tu visita sea agradable</h4>
        </div>
    )
}

export default Home;