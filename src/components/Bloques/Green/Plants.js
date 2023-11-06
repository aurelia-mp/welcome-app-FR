import React from 'react'
import { Link } from 'react-router-dom'

const Plants = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/plants.jpg" alt="plantas en jardin" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>ARCHITECTURE VERTE</p>
        <p className='parrafo'>À Palo Santo Hotel, des jardins verticaux couvrent les façades, patios, terrasses et balcons. Sur les façades, des structures métalliques permettent de guider la croissance de deux jardins verticaux de 28 mètres de haut. En tout, nos jardins se composents de plus de 900 plantes d'une douzaine d'espèces.</p>
        <p className='parrafo'>Les jardins verticaux n'ont pas seulement un rôle esthétique: ils jouent également un rôle écologique. Les plantes exercent une activité dépolluante en milieu urbain en absorbant les gaz et les éléments toxiques produits par la ville, et fournissent une isolation thermique supplémentaires.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Plants