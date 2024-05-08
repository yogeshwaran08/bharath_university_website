import React from "react";
import PeopleImg from "../../assets/images/peoples.png";
import "./AboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutusWrapper">
      <div className="mx">
        <div className="aboutusContent" id="aboutUs">
          <h4>About Us</h4>
          <p data-aos-duration="3000" data-aos="zoom-out-left">
            I recently had the pleasure of attending Bharath University, and I
            must say, it was an incredible experience. From the moment I arrived
            on campus, I was greeted with warmth and enthusiasm by the faculty,
            staff, and students. The campus itself is absolutely stunning, with
            a mix of modern and traditional architecture that creates a
            welcoming and inspiring environment.
          </p>
          <br />
          <p data-aos-duration="3000" data-aos="zoom-out-right">
            But what truly sets Bharath University apart is the quality of
            education. The professors are incredibly knowledgeable and
            passionate about their subjects, and they go above and beyond to
            help students succeed. They are always available for office hours,
            and they make an effort to get to know their students personally.
          </p>
        </div>

        <div className="aboutusImg">
          <img src={PeopleImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
