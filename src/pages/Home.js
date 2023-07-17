import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import BreadCrumb from 'react-bootstrap/Breadcrumb'
const Home = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb>
  <BreadCrumb.Item href="/">Home</BreadCrumb.Item>
  <BreadCrumb.Item href="/about">
  About
  </BreadCrumb.Item>
  <BreadCrumb.Item href='/destination'>Destination</BreadCrumb.Item>
</BreadCrumb>

      <div className="container">
        <div className="row mt-5">
          <Carousel >
            <Carousel.Item>
            <div className="card shadow ">
            <div className="card-body">
              <img src={require("../assets/des2.jpg")} alt className="card-img-top" />
              <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
            </div>
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card shadow ">
            <div className="card-body">
              <img src={require("../assets/des3.jpeg")} alt className="card-img-top" />
              
              <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
            </div>
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card shadow ">
            <div className="card-body">
              <img src={require("../assets/des1.jpg")} alt className="card-img-top" />
              
              <div className="card-footer d-flex justify-content-between align-items-center p-1"></div>
            </div>
          </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
