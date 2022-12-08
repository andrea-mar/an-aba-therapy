function ContactForm() {
    return (
        <div id="contactForm" className="section">
            <div  className="sectionDiv">
                <div className="contactFormItem">
                    <label for="emailAddress">Email address</label>
                    <input type="email" id="emailAddress" placeholder="name@example.com"/>
                </div>

                <div className="contactFormItem">
                    <label for="contactMessage">Your message:</label>
                    <textarea id="contactMessage" rows="6"></textarea>
                </div>

                <div className="contactFormItem">
                    <button type="submit">Send</button>
                </div>
            </div>    
        </div>
    )
}

export default ContactForm;