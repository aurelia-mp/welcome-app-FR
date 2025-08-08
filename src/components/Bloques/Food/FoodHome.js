import React from 'react'
import { Link } from 'react-router-dom'

const FoodHome = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/2507-Desayuno-Buffet-7-IMG_2250.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks/restaurant" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/food-drinks/minibar" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>PETIT DÉJEUNER</p>
        <p className='parrafo'>Notre petit déjeuner buffet est servi au rez-de-chaussée.</p>
        <p className='parrafo'>Horaires:</p>
        <p className='parrafo'>De lundi a vendredi: de 7h a 10h30</p>
        <p className='parrafo'>Samedis, dimanches et jours fériés: de 8h a 11h</p>
        <p className='parrafo'>UN VOL DE BON MATIN?</p>
        <p className='parrafo'>Si vous devez quitter l'hôtel avant l'ouverture du buffet, nous pouvons vous préparer un petit déjeuner à emporter. Prévenez-nous simplement la veille. Ne voyagez surtout pas le ventre vide :)</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default FoodHome