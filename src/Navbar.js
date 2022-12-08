import logo from './images/logo.png';
function Navbar() {
    return (
        <nav id="navbar">
            <div id="navLogo"> 
                <a href="#">
                    <img src={logo} alt="company logo" />
                </a>
            </div>
            <div id="navList">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;