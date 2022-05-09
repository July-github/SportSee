import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header(){

    return(
        <header className='headerContainer'>
            <img className='headerLogo' src={logo} alt="runner"/>
            <nav className='headerNavigation'>
                <Link to='/'>Accueil</Link>
                <Link to='/'>Profil</Link>
                <Link to='/'>Réglages</Link>
                <Link to='/'>Communauté</Link>
            </nav>
        </header>
    )
}

export default Header