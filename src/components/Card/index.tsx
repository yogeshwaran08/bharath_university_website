import React from "react";
import "./Card.css";

const Card: React.FC = () => {
  return (
    <div className="cardWrapper" id="courses">
      <div className="heading">
        <h4>Courses</h4>
      </div>
      <div>
        <div className="container">
          
          <div className="card">
            
            <div className="imgBox">
              <img
                src="https://blog.vantagecircle.com/content/images/2019/06/company-event.png"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Arts</h2>
              <p>
                Attending an arts college can be a transformative experience for students pursuing a career in the arts.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOJcV4KNxFI3IboeD1YYVxoNojZkzM3rqWs94RzyjFSqNxbLvWzk28i9xsuMpOCol7mE&usqp=CAU"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Architecture</h2>
              <p>
               Architecture school is a unique and challenging experience for students pursuing a career in design and construction.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img
                src="https://media.istockphoto.com/id/1193355523/vector/business-presentation-with-charts-on-the-board-in-front-of-the-audience-at-the-conference.jpg?s=612x612&w=0&k=20&c=7dUOP-tf5dgme6J8ZNQ2uBmqZzOfg2odxMN3d0_3hII="
                alt=""
              />
            </div>
            <div className="content">
              <h2>Medicine</h2>
              <p>
              Medical school is a rigorous and exciting experience for students pursuing a career in healthcare.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img
                src="https://blog.vantagecircle.com/content/images/2019/06/company-event.png"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Law</h2>
              <p>
                Law school is a challenging and rewarding experience for many students. It is a place where you can learn about the law and legal system, develop critical thinking and analytical skills, and gain practical experience through internships and clinics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
