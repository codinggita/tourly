import React from 'react';
import "./Frame.css";
import { useEffect } from "react";

import About from '../components/About';
import Home from '../components/Home';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";


const Framed = () => {
  const handleInquireNow = async () => {
    const question = prompt('Enter your inquiry:'); // You can use any method to get the user's question

    try {
      const response = await fetch('http://localhost:5000/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      alert(`Response from server: ${data.answer}`);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    
    // ... Your existing JSX code

    <button onClick={handleInquireNow} className="btn btn-secondary" id="inquireNowButton" aria-label="Inquire Now">
      Inquire now
    </button>

    // ... Your existing JSX code
  );
};



const Frame = () => {
  useEffect(() => {
    // Your JavaScript code here
    const overlay = document.querySelector("[data-overlay]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    const navElemArr = [navOpenBtn, navCloseBtn, overlay];

    const navToggleEvent = function (elem) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function () {
          navbar.classList.toggle("active");
          overlay.classList.toggle("active");
        });
      }
    }

    navToggleEvent(navElemArr);
    navToggleEvent(navLinks);

    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }
    });
  }, []); // Empty dependency array means this effect will only run once after the component is mounted

  const handleInquireNow = async () => {
    const question = prompt('Enter your inquiry:');

    try {
      const response = await fetch('http://localhost:5000/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      alert(`Response from server: ${data.answer}`);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="top">
      <header class="header" data-header>

<div class="overlay" data-overlay></div>

<div class="header-top">
  <div class="container">

    <a href="tel:+01123456790" class="helpline-box">

      <div class="icon-box">
        <ion-icon name="call-outline"></ion-icon>
      </div>

      <div class="wrapper">
        <p class="helpline-title">For Further Inquires :</p>

        <p class="helpline-number">+91-6267132693</p>
      </div>

    </a>

    <a href="#" class="logo">
      <img src="/logo.svg" alt="Tourly logo"></img>
    </a>

    <div class="header-btn-group">

      <button class="search-btn" aria-label="Search">
        <ion-icon name="search"></ion-icon>
      </button>

      <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

    </div>

  </div>
</div>

<div class="header-bottom">
  <div class="container">

    <ul class="social-list">

      <li>
        <a href="https://www.facebook.com/profile.php?id=100038678133260" target="_blank" class="social-link">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>

      <li>
        <a href="https://twitter.com/i/flow/login" target="_blank" class="social-link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li>
        <a href="https://www.youtube.com/" target="_blank" class="social-link">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </li>

    </ul>

    <nav class="navbar" data-navbar>

      <div class="navbar-top">

        <a href="#" class="logo">
          <img src="/logo-blue.svg" alt="Tourly logo"></img>
        </a>

        <button class="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

      </div>

      <ul class="navbar-list">

        <li>
          <a href="#home" class="navbar-link" data-nav-link>home</a>
        </li>

        <li>
          <a href="#destination" class="navbar-link" data-nav-link>destination</a>
        </li>

        <li>
          <a href="#package" class="navbar-link" data-nav-link>packages</a>
        </li>

        <li>
          <a href="#gallery" class="navbar-link" data-nav-link>gallery</a>
        </li>

        <li>
          <a href="about.html" target="_blank" class="navbar-link" data-nav-link>about us</a>
        </li>

        <li>
          <a href="#contact" class="navbar-link" data-nav-link>contact us</a>
        </li>

      </ul>

    </nav>

    <button class="btn btn-primary" data-book-now>Book Now</button>

  </div>
</div>

</header>





<main>
<article>



  <section class="hero" id="home">
    <div class="container">

      <h2 class="h1 hero-title">Journey to explore world</h2>

      <p class="hero-text">
        Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos
        voluptatibus habitant?
        Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
      </p>

      <div class="btn-group">
        <button class="btn btn-primary">Learn more</button>

        <button class="btn btn-secondary" data-book-now>Book now</button>
      </div>

    </div>
  </section>





  <section class="tour-search">
    <div class="container">

      <form action="" class="tour-search-form" id="tourSearchForm">

        <div class="input-wrapper">
          <label for="destination" class="input-label">Search Destination*</label>

          <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
            class="input-field"></input>
        </div>

        <div class="input-wrapper">
          <label for="people" class="input-label">Pax Number*</label>

          <input type="number" name="people" id="people" required placeholder="No.of People" class="input-field"></input>
        </div>

        <div class="input-wrapper">
          <label for="checkin" class="input-label">Checkin Date**</label>

          <input type="date" name="checkin" id="checkin" required class="input-field"></input>
        </div>

        <div class="input-wrapper">
          <label for="checkout" class="input-label">Checkout Date*</label>

          <input type="date" name="checkout" id="checkout" required class="input-field"></input>
        </div>

        <button type="submit" class="btn btn-secondary" id="inquireNowButton" aria-label="Inquire Now">Inquire
          now</button>


      </form>

    </div>
  </section>







  <section class="popular" id="destination">
    <div class="container">

      <p class="section-subtitle">Uncover place</p>

      <h2 class="h2 section-title">Popular destination</h2>

      <p class="section-text">
        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
        Sit ornare
        mollitia tenetur, aptent.
      </p>

      <ul class="popular-list">

        <li>
          <div class="popular-card">

            <figure class="card-img">
              <img src="/popular-1.jpg" alt="San miguel, italy" loading="lazy"></img>
            </figure>

            <div class="card-content">

              <div class="card-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>

              <p class="card-subtitle">
                <a href="#">Italy</a>
              </p>

              <h3 class="h3 card-title">
                <a href="#">San miguel</a>
              </h3>

              <p class="card-text">
                Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
              </p>

            </div>

          </div>
        </li>

        <li>
          <div class="popular-card">

            <figure class="card-img">
              <img src="/popular-2.jpg" alt="Burj khalifa, dubai" loading="lazy"></img>
            </figure>

            <div class="card-content">

              <div class="card-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>

              <p class="card-subtitle">
                <a href="#">Dubai</a>
              </p>

              <h3 class="h3 card-title">
                <a href="#">Burj khalifa</a>
              </h3>

              <p class="card-text">
                Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
              </p>

            </div>

          </div>
        </li>

        <li>
          <div class="popular-card">

            <figure class="card-img">
              <img src="/popular-3.jpg" alt="Kyoto temple, japan" loading="lazy"></img>
            </figure>

            <div class="card-content">

              <div class="card-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>

              <p class="card-subtitle">
                <a href="#">Japan</a>
              </p>

              <h3 class="h3 card-title">
                <a href="#">Kyoto temple</a>
              </h3>

              <p class="card-text">
                Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
              </p>

            </div>

          </div>
        </li>

      </ul>

      <button id="moreDestinationButton" class="btn btn-primary">More destintion</button>

    </div>
  </section>







  <section class="package" id="package">
    <div class="container">

      <p class="section-subtitle">Popular Packeges</p>

      <h2 class="h2 section-title">Checkout Our Packeges</h2>

      <p class="section-text">
        <b>Check out our exclusive travel packages and embark on your dream journey today!</b>
      </p>

      <ul class="package-list">

        <li>
          <div class="package-card">

            <figure class="card-banner">
              <img src="/packege-1.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"></img>
            </figure>

            <div class="card-content">

              <h3 class="h3 card-title">Experience The Great Holiday On Beach</h3>

              <p class="card-text">
                Batu Ferringhi Beach
                Langkawi Beaches (Pantai Cenang, Pantai Tengah), Cherating Beach, Redang Island, Tioman Island,
                Perhentian Islands (Perhentian Besar, Perhentian Kecil), Pangkor Island,Tanjung Aru Beach,Damai
                Beach,Port Dickson Beach
              </p>

              <ul class="card-meta-list">

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="time"></ion-icon>

                    <p class="text">7D/6N</p>
                  </div>
                </li>

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="people"></ion-icon>

                    <p class="text">pax: 10</p>
                  </div>
                </li>

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="location"></ion-icon>

                    <p class="text">Malaysia</p>
                  </div>
                </li>

              </ul>

            </div>

            <div class="card-price">

              <div class="wrapper">

                <p class="reviews">(25 reviews)</p>

                <div class="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>

              <p class="price">
                ₹7500
                <span>/ per person</span>
              </p>

              <button class="btn btn-secondary" data-book-now>Book Now</button>

            </div>

          </div>
        </li>

        <li>
          <div class="package-card">

            <figure class="card-banner">
              <img src="/packege-2.jpg" alt="Summer Holiday To The Oxolotan River" loading="lazy"></img>
            </figure>

            <div class="card-content">

              <h3 class="h3 card-title">Summer Holiday To The Oxolotan River</h3>

              <p class="card-text">
                This river is perfect for taking a quiet, leisurely float downstream. Meandering through lush
                tropical forests and picturesque canyons, it is easy to forget the world and just relax.
              </p>

              <ul class="card-meta-list">

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="time"></ion-icon>

                    <p class="text">7D/6N</p>
                  </div>
                </li>

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="people"></ion-icon>

                    <p class="text">pax: 10</p>
                  </div>
                </li>

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="location"></ion-icon>

                    <p class="text">Maxico</p>
                  </div>
                </li>

              </ul>

            </div>

            <div class="card-price">

              <div class="wrapper">

                <p class="reviews">(20 reviews)</p>

                <div class="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>

              <p class="price">
                ₹5200
                <span>/ per person</span>
              </p>

              <button class="btn btn-secondary" data-book-now>Book Now</button>

            </div>

          </div>
        </li>

        <li>
          <div class="package-card">

            <figure class="card-banner">
              <img src="/packege-3.jpg" alt="Santorini Island's Weekend Vacation" loading="lazy"></img>
            </figure>

            <div class="card-content">

              <h3 class="h3 card-title">Santorini Island's Weekend Vacation</h3>

              <p class="card-text">
                Oia
                Fira, Kamari Beach, Red Beach, Perissa Beach, Akrotiri Archaeological Site, Pyrgos, Santo Winery,
                Nea
                Kameni Island, Amoudi Bay
              </p>

              <ul class="card-meta-list">

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="time"></ion-icon>

                    <p class="text">7D/6N</p>
                  </div>
                </li>

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="people"></ion-icon>

                    <p class="text">pax: 10</p>
                  </div>
                </li>

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="location"></ion-icon>

                    <p class="text">Greece</p>
                  </div>
                </li>

              </ul>

            </div>

            <div class="card-price">

              <div class="wrapper">

                <p class="reviews">(40 reviews)</p>

                <div class="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>

              <p class="price">
                ₹6600
                <span>/ per person</span>
              </p>

              <button class="btn btn-secondary" data-book-now>Book Now</button>

            </div>

          </div>
        </li>

      </ul>

      <button class="btn btn-primary">View All Packages</button>

    </div>
  </section>





  <section class="gallery" id="gallery">
    <div class="container">

      <p class="section-subtitle">Photo Gallery</p>

      <h2 class="h2 section-title">Photo's From Travellers</h2>

      <p class="section-text">
        Discover popular destinations, browse through enticing travel packages, and immerse yourself in the
        captivating stories and experiences of fellow travelers through our photo gallery.
      </p>

      <ul class="gallery-list">

        <li class="gallery-item">
          <figure class="gallery-image">
            <img src="/gallery-1.jpg" alt="Gallery image"></img>
          </figure>
        </li>

        <li class="gallery-item">
          <figure class="gallery-image">
            <img src="/gallery-2.jpg" alt="Gallery image"></img>
          </figure>
        </li>

        <li class="gallery-item">
          <figure class="gallery-image">
            <img src="/gallery-3.jpg" alt="Gallery image"></img>
          </figure>
        </li>

        <li class="gallery-item">
          <figure class="gallery-image">
            <img src="/gallery-4.jpg" alt="Gallery image"></img>
          </figure>
        </li>

        <li class="gallery-item">
          <figure class="gallery-image">
            <img src="/gallery-5.jpg" alt="Gallery image"></img>
          </figure>
        </li>

      </ul>

    </div>
  </section>





  <section class="cta" id="contact">
    <div class="container">

      <div class="cta-content">
        <p class="section-subtitle">Call To Action</p>

        <h2 class="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>

        <p class="section-text">
          With a team of passionate travel experts, we're here to make your travel experience seamless and
          unforgettable. Whether you're a solo explorer, a couple in search of a romantic escape, or a family
          looking for the perfect vacation, we've curated a selection of handpicked destinations and packages to
          cater to all your travel desires.
        </p>
      </div>

      <button class="btn btn-secondary">Contact Us !</button>

    </div>
  </section>

</article>
</main>







<footer class="footer">

<div class="footer-top">
  <div class="container">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src="/logo.svg" alt="Tourly logo"></img>
      </a>

      <p class="footer-text" id="aboutus">
        <b>Welcome to Tourly - Your Gateway to Adventure and Discovery!</b><br></br>
        At Tourly, we're your trusted travel agency dedicated to turning your travel dreams into reality. Whether
        you're seeking a tranquil beach getaway, an adrenaline-pumping adventure, or a cultural immersion, we've got
        you covered.
      </p>

    </div>

    <div class="footer-contact">

      <h4 class="contact-title">Contact Us</h4>

      <p class="contact-text">
        Feel free to contact and reach us !!
      </p>

      <ul>

        <li class="contact-item">
          <ion-icon name="call-outline"></ion-icon>

          <a href="tel:+01123456790" class="contact-link">+91-6267132693</a>
        </li>

        <li class="contact-item">
          <ion-icon name="mail-outline"></ion-icon>

          <a href="mailto:info.tourly.com" class="contact-link">shivssoni55@gmail.com</a>
        </li>

        <li class="contact-item">
          <ion-icon name="location-outline"></ion-icon>

          <address>144411 Phagwara, Jalandhar</address>
        </li>

      </ul>

    </div>

    <div class="footer-form">

      <p class="form-text">
        Subscribe our newsletter for more update & news !!
      </p>

      <form action="" class="form-wrapper">
        <input type="email" name="email" class="input-field" placeholder="Enter Your Email" required></input>

        <button type="submit" class="btn btn-secondary">Subscribe</button>
      </form>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      &copy; 2024 <a href="">ShivScripter</a>. All rights reserved
    </p>

    <ul class="footer-bottom-list">

      <li>
        <a href="privacy.html" target="_blank" class="footer-bottom-link">Privacy Policy</a>
      </li>

      <li>
        <a href="terms.html" target="_blank" class="footer-bottom-link">Term & Condition</a>
      </li>

      <li>
        <a href="faq.html" target="_blank" class="footer-bottom-link">FAQ</a>
      </li>

    </ul>

  </div>
</div>

</footer>








<a href="#top" class="go-top" data-go-top>
<ion-icon name="chevron-up-outline"></ion-icon>
</a>
    </div>
    
  );
};

export default Frame;
