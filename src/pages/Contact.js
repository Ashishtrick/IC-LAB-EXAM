import React from "react";
import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-3 col-md-4">
            <div className="card shadow ">
              <div className="card-body">
                <img
                  src={require("../assets/des1.jpg")}
                  alt="des1"
                  className="card-img-top"
                />
                <h1 className="card-title fw-bold fs-4">Sun temple</h1>
                <p className="card-text fs-6 fw-light">
                  this is most beautiful temple in thailand
                </p>
                <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-4">
            <div className="card shadow ">
              <div className="card-body">
                <img
                  src={require("../assets/des2.jpg")}
                  alt="des2"
                  className="card-img-top"
                />
                <h1 className="card-title fw-bold fs-4">morraco city</h1>
                <p className="card-text fs-6 fw-light">
                  white city of the morraco to see the sunset
                </p>
                <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-4">
            <div className="card shadow ">
              <div className="card-body">
                <img
                  src={require("../assets/des3.jpeg")}
                  alt="des3"
                  className="card-img-top"
                />
                <h1 className="card-title fw-bold fs-4">Alaska</h1>
                <p className="card-text fs-6 fw-light">
                  chilling view of the alaska
                </p>
                <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-4">
            <div className="card shadow ">
              <div className="card-body">
                <img
                  src={require("../assets/des5.jpg")}
                  alt="des5"
                  className="card-img-top"
                />
                <h1 className="card-title fw-bold fs-4">goa</h1>
                <p className="card-text fs-6 fw-light">
                  lets party in goa
                </p>
                <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-4">
            <div className="card shadow ">
              <div className="card-body">
                <img
                  src={require("../assets/des4.jpg")}
                  alt="..."
                  className="card-img-top"
                />
                <h1 className="card-title fw-bold fs-4">Munnar</h1>
                <p className="card-text fs-6 fw-light">
                 tea plantation in munnar
                </p>
                <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-4">
            <div className="card shadow ">
              <div className="card-body">
                <img
                  src={require("../assets/des6.jpg")}
                  alt="dubai"
                  className="card-img-top"
                />
                <h1 className="card-title fw-bold fs-4">dubai</h1>
                <p className="card-text fs-6 fw-light">
                  lets go dubai to see the burj khalifa
                </p>
                <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
