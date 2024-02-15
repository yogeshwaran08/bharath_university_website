import React from "react";
import "./FAQ.css";
import FAQImg from "../../assets/images/faqImg.png";

const FAQ: React.FC = () => {
  return (
    <div className="mx">
      <div className="faqContainer">
        <div className="heading" data-aos="fade-up" data-aos-duration="3000">
          <h1>FAQ</h1>
        </div>

        <div className="faqContent">
          <div className="faq" data-aos="fade-up" data-aos-duration="3000">
            <details>
              <summary>Why Bharath university</summary>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </details>

            <details>
              <summary>Bharath universities achivements?</summary>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </details>

            <details>
              <summary>Facilities in Bharath University?</summary>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </details>
            <details>
              <summary>Education system in Bharath University?</summary>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </details>
            <details>
              <summary>where is Bharath university?</summary>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </details>
          </div>
          <div className="faqImg" data-aos-duration="3000" data-aos="fade-down">
            <img src={FAQImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
