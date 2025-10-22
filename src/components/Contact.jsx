function Contact (){
    return (
      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <div className="contact-container">
            {/*LEFT SIDE:INFO */}
            <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you! Whether you’re looking to adopt or volunteer, our shelter is always open for kind hearts ❤️</p>

            <ul>
                <li>
                    📍 <strong>Address:</strong> 231 St Street, Pet Adoption Shelter
                </li>
                <li>
                    📞 <strong>Phone:</strong> +123 456 789
                </li>
                <li>
                    ✉️ <strong>Email:</strong> contact@pawfectadoption.com
                </li>
            </ul>
            </div>

        
        {/* RIGHT SIDE:FORM*/}
        <form action="location.php" className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Write your message..." rows={4} required></textarea>

            <button type="submit">Send Message</button>
        </form>
        </div>
      </section>
    )
}
export default Contact;