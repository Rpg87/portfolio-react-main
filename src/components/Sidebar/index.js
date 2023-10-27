import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-gris.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';



const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);


    return (


        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact='true' activeclassname='active' to='/' >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' /> </NavLink>

                <NavLink activeclassname='active' className='about-link' to='/about' >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' /> </NavLink>

                <NavLink activeclassname='active' className='portfolio-link' to='/portfolio' >
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' /> </NavLink>


                <NavLink activeclassname='active' className='contact-link' to='/contact' >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='#ffd700'
                    size='3x'
                    className='close-icon' />
            </nav>

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/raquel-pe-go/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Rpg87'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ffd700'
                size='3x'
                className='hamburger-icon' />
        </div>

    )
}

export default Sidebar;