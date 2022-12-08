import logo from "./images/logo.png"

function Footer() {
    return (
        <div id="footer">
            <div id="footerLogoCopyright">
                <img src={logo} alt="company logo" />
                <p>Copyright &#169; 2022</p>
            </div>

            <div id="footerLegal">
                <div>
                    <p><a href="#">Privacy Policy</a></p>
                </div>
                <div>
                    <p><a href="#">Cookies</a></p>
                </div>
            </div>

        </div>
    )
}

export default Footer;