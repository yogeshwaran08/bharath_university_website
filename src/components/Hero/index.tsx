import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/bharath_logo.png";
import CloseUp from "../../assets/icons/arrow-up.svg";
import "./Hero.css";

const HeroTwo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="banner">
        <div className="navbar">
          <img src={Logo} alt="logo" className="logo" />
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#aboutUs">About Us</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="heroContent">
          <h1 data-aos-duration="3000" data-aos="fade-down-right">
            Bharath Institute of <br /> Higher Education and Research
          </h1>
          <p data-aos="fade-down-left" data-aos-duration="3000">
            Bharath university is an institution of higher learning that offers
            post-secondary education, typically leading to a bachelor's degree
            or higher. Colleges provide students with opportunities to learn and
            grow intellectually, develop critical thinking and problem-solving
            skills, and prepare for future careers.
          </p>
          <div>
            <button type="button">
              <span></span>Register Now
            </button>
          </div>
        </div>
      </div>
      <div>
        {isVisible && (
          <div className="topButton" onClick={scrollToTop}>
            <img src={CloseUp} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTwo;
