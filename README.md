# Naija-properties
Real Estate Website: This is a real estate platform where users can browse, search, and  filter properties. The site will showcase property listings with detailed information, contact  details.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Real Estate Website: This is a real estate platform where users can browse, search, and 
filter properties. The site will showcase property listings with detailed information,contact 
details. "
    />
    <meta name="keywords" content="Real Estate and listing properties" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/global.css" />
    <link rel="stylesheet" href="./css/aboutus.css" />
    <title>Naija properties</title>
  </head>
  <body>
    <!-- nav -->
    <header class="">
      <div class="container header-contents">
        <div class="logo-container">
          <h3 class="logo">NaijaProperties</h3>
        </div>
        <nav>
          <ul class="nav-lists">
            <li class="nav-list">
              <a href="./villa.html">Villa</a>
            </li>
            <li>
              <a href="./aboutus.html">About Us</a>
            </li>
            <li>
              <a href="contactus.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="menu-bar">
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>

    <section class="container ">
      <div class="card-left">
        <img src="./Assets/property-13.png" alt="card-left" />
      </div>
      <div class="hero-right">
        <h2 class="hero-right-title">Your peace of mind, our priority</h2>
        <p class="hero-right-para">
          Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
          Morbi nec tempus dui, sit amet facilisis nisl. Curabitur efficitur
          luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu
          accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem
          elementum, viverra ligula at, lobortis magna. Praesent congue nibh in
          dolor rutrum, et euismod quam elementum. Mauris justo felis, iaculis
          quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit
          amet rutrum turpis egestas viverra. Quisque at libero purus.
        </p>
      </div>
    </section>

    <section class="container about">
      <div class="aboutus-information">
        <div class="about-left">
          <h2 class="aboutus-title">About us</h2>
          <p class="about-para">
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
            Morbi nec tempus dui, sit amet facilisis nisl.
          </p>
          <p class="about-para">
            Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris
            eleifend, id tempor purus ultricies.
          </p>
          <p class="about-para">
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
            venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
            feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna.
            Praesent congue nibh in dolor rutrum, et euismod quam elementum.
          </p>
          <p class="about-para">
            Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae
            est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra.
            Quisque at libero purus
          </p>
          <p class="about-us-left-para">
            We strive to offer you best possible homes to stay.
          </p>
        </div>

        <img
          src="./Assets/property-8.png"
          alt="image"
          class="aboutus-card-image"
        />
      </div>
    </section>

    <section class="contact">
      <div class="contact-wrapper">
        <!-- Left side (Info) -->
        <div class="contact-info">
          <h2>Let’s connect</h2>
          <p><strong>Phone</strong><br />+385 91 322 8444</p>
          <p><strong>Email</strong><br />prospekt@prospekt.hr</p>
          <p>
            <strong>Address</strong><br />
            Prospekt Ltd<br />
            Drazice 138, 51 000 Rijeka<br />
            Croatia
          </p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Right side (Form) -->
        <div class="contact-form">
          <h2>We’d love to hear from you</h2>
          <form>
            <div class="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea placeholder="Message" required></textarea>
            <div class="terms">
              <input type="checkbox" required />
              <label>I accept the Terms and conditions</label>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <h3>LUXURY RENTALS</h3>
          <p>
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Notice and Cookies</a>
            <a href="#">Imprint</a>
          </div>
        </div>
        <div class="footer-right">
          <h4>Connect with us</h4>
          <p>+00 000 000 00<br />info@luxuryrentals.com</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <p class="copyright">Luxury rentals. | © All rights reserved 2025</p>
    </footer>
  </body>
</html>


css

:root{
  --bg-color :#ffffff;
  --text-color :#000000;
  --font-family: "Raleway", sans-serif;
  --primary-color: ;
  --secondary-color:#ffffff;

}
.header-contents{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  position: sticky;
}
.logo{
  width: 12px;
  height: 12px;
}
.nav-lists{
  display: flex;
  gap: 1rem;
}
.menu-bar{
  display: none;
  font-size: 1.7rem;
  cursor: pointer;
}
/* nav */



 .hero {
   display: flex;
  justify-content:space-between ;
  gap: 80px;

 }
  


.card-left{
  flex:1 ; 
  gap: 2rem;
}
.hero-right{
  display: flex;
  flex-direction:column ;
  gap: 2rem;
}
.hero-right-title h2{
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
font-family: Rufina;
align-items: center;

}
.hero-right-para p{
  width: 512px;
   font-size: 18px;
  font-weight: 500;
  font-family: Raleway;
  align-items: center;

}

/* container about */
/* about us */
.aboutus-information{
  margin-top: 120px; 
  display: flex;
  justify-content: space-between; 
}
.about-left{
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.aboutus-title h2{
font-size: 1.8rem;
font-weight: 600;
font-family: Rufina;
text-align: center;
}
.about-para{
  width: 513px;
  font-weight: 500;
  font-size: 18px;
  font-family: Raleway;
  
}



.about-us-left-para{
  background-color:#DFE3E7 ;
  border-radius: 4px;
  padding: 26px 16.3px 26px 14.27px;
}
/* footer */

/* Contact Section */
.contact {
  display: flex;
  justify-content: center;
  padding: 50px 10%;
}
.contact-wrapper {
  display: flex;
  width: 100%;
  max-width: 1200px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  background: #fff;
}

/* Left side */
.contact-info {
  flex: 1;
  background: #111;
  color: #eee;
  padding: 40px;
}
.contact-info h2 {
  margin-bottom: 20px;
  font-size: 26px;
}
.contact-info p {
  margin-bottom: 15px;
  font-size: 15px;
}
.contact-info .social-icons a {
  color: #eee;
  margin-right: 12px;
  font-size: 18px;
  text-decoration: none;
}
.contact-info .social-icons a:hover {
  color: #aaa;
}

/* Right side */
.contact-form {
  flex: 2;
  padding: 40px;
}
.contact-form h2 {
  margin-bottom: 20px;
  font-size: 26px;
}
.form-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  outline: none;
}
textarea {
  resize: vertical;
  min-height: 120px;
  margin-bottom: 15px;
}
.terms {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
}
.terms input {
  margin-right: 8px;
}
button {
  background: #444;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
}
button:hover {
  background: #222;
}

/* Footer */
.footer {
  background: #eaeaea;
  padding: 40px 10%;
  margin-top: 40px;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer-left, .footer-right {
  flex: 1;
  margin: 15px;
}
.footer-left h3 {
  margin-bottom: 15px;
}
.footer-right h4 {
  margin-bottom: 10px;
}
.footer-links a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}
.footer-links a:hover {
  text-decoration: underline;
}
.footer .social-icons a {
  margin-right: 12px;
  font-size: 18px;
  color: #111;
}
.footer .social-icons a:hover {
  color: #555;
}
.footer p.copyright {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color: #555;
}

