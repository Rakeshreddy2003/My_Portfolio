import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front end</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>
        </div>



        {/* this is the second vertical part of the skills section */}

                <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge"></i>
            <div>
              <h3 className="skills__name">Reactjs</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge"></i>
            <div>
              <h3 className="skills__name">UI/UX</h3>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Frontend;
