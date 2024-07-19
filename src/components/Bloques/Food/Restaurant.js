import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/patioNoche.jpg" alt="patio de noche" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/food-drinks/minibar" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/food-drinks" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>RESTAURANT CHARQUI</p>
        <p className='parrafo'>La restaurant Charqui, situé au rez-de-chaussée, propose une cuisine variée, argentine principalement.</p>
        <p className='parrafo'>Leur menu est disponible sur place ou sur leur profil Instagram:</p>
        <p className='parrafo'><a href="https://instagram.com/charquirestaurantok?igshid=NTc4MTIwNjQ2YQ==" rel="noreferrer" target="_blank">@charquirestaurantok</a></p>
        <p className='parrafo'>Horaires:</p>
        <p className='parrafo'>Mardi: 12h-15h30</p>
        <p className='parrafo'>Mercredi a vendredi: 12h-15h30 / 19h-minuit</p>
        <p className='parrafo'>Samedi: 12h-minuit</p>
        <p className='parrafo'>Dimanche: 12h-19h</p>
        <p className='parrafo'>Fermé le lundi</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Restaurant