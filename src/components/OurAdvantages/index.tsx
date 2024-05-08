import React from "react";
import "./OurAdvantages.scss";
import Event from "../../assets/icons/users.svg";
import Calendar from "../../assets/icons/calendar.svg";
import Payment from "../../assets/icons/payment.svg";
import Note from "../../assets/icons/note.svg";
import Chart from "../../assets/icons/activity.svg";
import PieChart from "../../assets/icons/pie-chart.svg";
import Result from "../../assets/icons/file-text.svg";
import Book from "../../assets/icons/book-open.svg";

const OurAdvantages: React.FC = () => {
  return (
    <div className="ourAdvantagesWrapper">
      <div className="mx">
        <div className="heading">
          <h4>CHOOSE YOUR STYLE</h4>
          <h1>Our advantages in this field</h1>
        </div>
        <div
          className="advantagesIcons"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="iconContent">
            <div className="icon">
              <img src={Event} alt="" />
            </div>
            <div className="para">
              <h4>Events</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={Payment} alt="" />
            </div>
            <div className="para">
              <h4>Payments</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={Calendar} alt="" />
            </div>
            <div className="para">
              <h4>Timetable</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={Note} alt="" />
            </div>
            <div className="para">
              <h4>Notes</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={Result} alt="" />
            </div>
            <div className="para">
              <h4>Result</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={Book} alt="" />
            </div>
            <div className="para">
              <h4>Exams</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={PieChart} alt="" />
            </div>
            <div className="para">
              <h4>Attendence %</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
          <div className="iconContent">
            <div className="icon">
              <img src={Chart} alt="" />
            </div>
            <div className="para">
              <h4>Activity</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                porro. Quos, id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
