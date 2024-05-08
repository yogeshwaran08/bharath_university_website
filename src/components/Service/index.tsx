import React, { useState } from "react";
import ServiceImgOne from "../../assets/images/serviceImgOne.svg";
import ServiceImgTwo from "../../assets/images/serviceImgTwo.svg";
import ServiceOne from "../../assets/images/serviceOne.png";
import Service_One from "../../assets/images/image-1.jpg";
import Service_Two from "../../assets/images/image-2.jpg";
import Service_Three from "../../assets/images/image-3.jpg";
import Service_Four from "../../assets/images/image-4.jpg";

import "./Service.scss";

const Service: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="serviceWrapper" id="service">
      <div className="mx">
        <div className="heading">
          <h4>Service</h4>
        </div>
        <div className="serviceContainer">
          <div
            className="firstContent"
            data-aos-duration="3000"
            data-aos="flip-down"
          >
            <h5>SERVICES WE PROVIDE</h5>
            <h1>
              Our Purpose is To Deliver Excellence in Service and Education
            </h1>
            <p>
              Colleges often provide academic advising services to help students
              plan their course schedules, select majors, and make progress
              towards graduation. Academic advisors can also offer guidance on
              academic policies and procedures, study skills, and time
              management.
              <br></br>Colleges often offer career services to help students
              explore career options, develop job search strategies, create
              resumes and cover letters, and prepare for job interviews. Some
              colleges also provide job placement assistance.
            </p>
          </div>
          <div
            className="secondContent"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
            <div className="serviceImgOne">
              <img src={ServiceImgOne} alt="" />
              <div className="serviceImgTwo">
                <img src={ServiceImgTwo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="gridContainer">
          <div className="box" data-aos-duration="3000" data-aos="fade-up">
            <img src={Service_One} alt="" />
            <h3>Library</h3>
            <p>
              A library is an essential resource for any college, providing
              students with access to a wide range of educational materials,
              including books, journals, and multimedia resources. Here are some
              of the things that you can expect to find in a college library:
            </p>
            <h4 onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show Less" : "View more"}
            </h4>
          </div>
          <div
            className="box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Service_Two} alt="" />
            <h3>Auditorium</h3>
            <p>
              Bharath college have auditoriums on campus that are used for a
              variety of purposes.
            </p>
            <h4 onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show Less" : "View more"}
            </h4>
          </div>
          <div className="box" data-aos-duration="3000" data-aos="fade-up">
            <img src={Service_Three} alt="" />
            <h3>Computer Lab</h3>
            <p>
              Laboratories (labs) are an integral part of a college education,
              particularly for students in science, engineering, and
              health-related fields.
            </p>
            <h4 onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show Less" : "View more"}
            </h4>
          </div>
          <div
            className="box"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Service_Four} alt="" />
            <h3>Chemistry Lab</h3>
            <p>
              College labs are equipped with a variety of specialized tools and
              equipment that are specific to the field of study.
            </p>
            <h4 onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show Less" : "View more"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
