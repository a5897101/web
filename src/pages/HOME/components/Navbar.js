import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css"

function Navbar () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
    return (
        <header>
            <img src={require('../../../images/logo2.png')}alt="logo"/>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Attribute</a>
                <a href="/#">Mint</a>
                <a href="/#">About</a>
                <a href="/#">FQA</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
export default Navbar
