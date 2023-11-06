import React from 'react'
import { Link } from 'react-router-dom'

const Minibar = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/Premium-Balcon-Noche-1030.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/food-drinks/restaurant" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>MINIBAR / VINS</p>
        <p className='parrafo'>Une variéte de snacks sucrés et salés sont disponibles dans votre minibar. Vous trouverez une liste de prix imprimée, dans votre chambre.</p>
        <p className='parrafo'>EAU</p>
        <p className='parrafo'>Afin de réduire l'usage de plastique à usage unique, nous avons choisi une eau en cannette pour nos minibars. Une carafe en verre est à votre disposition, vous pouvez la remplir à volonté dans le lobby (fontaine d'eau dans le jardin d'hiver). L'eau du robinet est également parfaitement potable.</p>
        <p className='parrafo'>VIN</p>
        <p className='parrafo'>Nous avons sélectionné des vins de producteurs argentins.</p>
        <p className='parrafo'>Les prix sont affichés avec le reste des produits du minibar.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Minibar