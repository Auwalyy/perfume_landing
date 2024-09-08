import { useState, useRef, useEffect } from 'react'
import { links, social } from '../components/data'
import Logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [showLink, setShowLinks] = useState(false)

    const LinksContainerRef = useRef(null)
    const LinkRef = useRef(null)

    // useEffect(()=>{
    //     const linksHeight = LinkRef.current.getBoundingClientReact().height;
    //     if(showLink){
    //         LinksContainerRef.current.style.height = `${linksHeight} px`
    //     }
    //     else {
    //         LinksContainerRef.current.style.height = '0px '
    //     }
    // },[showLink])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} alt="logo" />
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLink)}>
                        <FaBars />
                    </button>
                </div>
                { showLink && (
                    <div className="links-container show-container" ref={LinksContainerRef}>
                        <ul className="links" ref={LinkRef}>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar