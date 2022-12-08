import logo from "./images/logo.png"

function Footer() {
    return (
        <div>
            <div id="footerLogoCopyright">
                <img src={logo} alt="company logo" />
                <p>Copyright &#169; 2022</p>
            </div>

            <div id="footerLegal">
                <div>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>Cookies</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;