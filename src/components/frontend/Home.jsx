import React, { useEffect, useState } from "react";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
// import ServiceImg from "../../assets/images/construction1.jpg";
import ConstructionImg from "../../assets/images/construction2.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import { About } from "./common/About";
import { apiUrl, token } from "./common/http";
import { LatestServices } from "./common/LatestServices";
import { LatestProjects } from "./common/LatestProjects";
import { LatestArticles } from "./common/LatestArticles";
import { ShowTestimonial } from "./common/ShowTestimonial";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid w-75">
              <div className="text-center">
                <span>Building the Future</span>
                <h1>Skyline Heights Construction</h1>
                <p>
                  We deliver reliable construction services with strong
                  craftsmanship, modern techniques, and a commitment to safety.
                  From residential projects to large commercial builds, our team
                  turns your vision into durable and high-quality structures.
                </p>
                <div className="mt-3">
                  <a href="/contact" className="btn btn-primary large">Get Started</a>
                  <a href="/projects" className="btn btn-secondary ms-2 large">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <About />

        {/* Our Services */}
        <LatestServices/>

        {/* Why choose US */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>why choose us</span>
              <h2>Discover our wide range of projects</h2>
              <p>
                Created with passion and dedication to deliver exceptional
                results.
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="icon-1" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big results. We are committed to making
                    a positive impact on the environment through sustainable
                    construction practices, energy-efficient designs, and
                    eco-friendly materials.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} alt="icon-1" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big results. We are committed to making
                    a positive impact on the environment through sustainable
                    construction practices, energy-efficient designs, and
                    eco-friendly materials.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} alt="icon-1" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>
                  <p>
                    Small actions create big results. We are committed to making
                    a positive impact on the environment through sustainable
                    construction practices, energy-efficient designs, and
                    eco-friendly materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects */}
        <LatestProjects/>

        {/* Testimonials */}
        <ShowTestimonial/>

        {/* Blog */}
        <LatestArticles/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
