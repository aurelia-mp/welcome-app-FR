import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { SessionContextProvider } from './context/sessionContext';
import { useMediaQuery } from 'react-responsive'


function App() {

  const esComputadora = useMediaQuery({ query: '(min-width: 1224px)'})
  return (
      <>
         {!esComputadora ? 
        <BrowserRouter>
          <SessionContextProvider>
            <Main />
          </SessionContextProvider>
          <Footer />
        </BrowserRouter>
        :
        <div className="computadora">
        <img src="/fotos/logo.jpg" alt="logo"></img>
        <h2>Cette application doit être visualisée sur un dispositif mobile (téléphone ou tablette). Pour continuer, veuillez réduire la taille de cette fenêtre ou de l'ouvrir sur un autre dispositif.</h2>
        <p><a href="https://www.palosantohotel.com">Visiter notre site web</a></p>
        </div>
        }
      </> 
  );
}

export default App;
