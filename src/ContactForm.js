function ContactForm() {
    return (
        <div id="contactForm">
            <div>
                <label for="emailAddress">Email address</label>
                <input type="email" id="emailAddress" placeholder="name@example.com"/>
            </div>

            <div>
                <label for="contactMessage">Your message:</label>
                <textarea id="contactMessage" rows="6"></textarea>
            </div>
            
            <button type="submit">Send</button>
        </div>    
    )
}

export default ContactForm;