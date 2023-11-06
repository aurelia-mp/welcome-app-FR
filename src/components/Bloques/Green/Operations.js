import React from 'react'
import { Link } from 'react-router-dom'

const Operations = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/operations.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/air" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/plants" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>GESTION ET SERVICES</p>
        <p className='parrafo'>Nous minimisons l'impact lié à la gestion de l'hôtel et les services offerts à nos hôtes:</p>
        <p className='parrafo'>Nous trions et recyclons nos déchets</p>
        <p className='parrafo'>Des vélos sont à disposition de nos hôtes</p>
        <p className='parrafo'>Nous choisissons nos prestataires extérieurs selon des critères de responsabilité écologique et sociale</p>
        <p className='parrafo'>Nous utilisons des produits d'entretien et des produits de toilettes respectueux de l'environnement</p>
        <p className='parrafo'>Nous limitons nos impressions et l'usage de papeterie commerciale</p>
        <p className='parrafo'>Notre site web est hébergé sur un serveur éco-certifié</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Operations