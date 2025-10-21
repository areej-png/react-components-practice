import aboutImg from "/about-image.png"; // 👈 apni image ka path yahan adjust karna

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Adopting from an animal shelter provides a loving home for a pet in need
            while also helping reduce overcrowding and supporting the shelter.
          </p>
          <p>
            At Pawfect, we connect kind hearts with loyal paws. Every adoption
            changes two lives — one animal gets a home, and one person gets a friend 🐾
          </p>
        </div>
        
        <div className="about-image">
          <img src={aboutImg} alt="Happy adopted pet" />
        </div>
      </div>
    </section>
  );
}

export default About;
