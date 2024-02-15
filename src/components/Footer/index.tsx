import React from 'react'
import "./Footer.css"
import Logo from "../../assets/images/bharath_logo.png"

const Footer= () => {
  return (
     <div className="footer-container">

            <div className="footer-list">
                <div className="social-media">
                    <h4>Bharath University</h4>
                    <img src={Logo} width="200px"/>
                    
                </div>
                

                <div className="business">
                    <h4>On Campus</h4>
                    <a href="">academic</a>
                    <a href="">Planning & Administration</a>
                    <a href="">Campus Safety</a>
                    <a href="">Office of the Chancellor</a>
                    <a href="">Facility Services</a>
                    <a href="">Human Resources</a>
                   

                </div>

                <div className="ngo">
                    <h4>Campus life</h4>
                    <a href="">Accessibility</a>
                    <a href="">Financial Aid</a>
                    <a href="">Food Services</a>
                    <a href="">Housing</a>
                    <a href="">Information Technologies</a>
                    <a href="">Student Life</a>
                    

                </div>
                <div className="tax">
                    <h4>Academics</h4>
                    <a href="">Canvas</a>
                    <a href="">Catalyst</a>
                    <a href="">Library</a>
                    <a href="">Time Schedule</a>
                    <a href="">Apply For Admissions</a>
                    <a href="">Pay My Tuition</a>
                    
                </div>

                

            </div>

            <div className="footer-block">
                <a href="">About us</a>
                <a href="">Pay Now</a>
                <a href="">Learning</a>
                <a href="">Privacy Policy</a>
                <a href="">Refund Policy</a>
                <a href="">Terms & Condition</a>
                <a href="">Contact us</a>

            </div>


            <p>All Right Reserved © Bharath University</p>

























        </div>
  )
}

export default Footer;
