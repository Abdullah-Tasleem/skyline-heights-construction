import React from "react";
import AboutImg from "../../../assets/images/about-us.jpg";

export const About = () => {
  return (
    <section className="section-2 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={AboutImg} alt="about-us" className="w-100" />
          </div>
          <div className="col-md-6">
            <span>about us</span>
            <h2>Crafting Structures, Building Dreams</h2>
            <p>
              Building structures that stand the test of time, we are a
              construction company dedicated to turning your visions into
              reality. With a commitment to quality, innovation, and
              sustainability, we bring expertise and craftsmanship to every
              project. From residential homes to commercial developments, we
              build more than just structures; we build dreams.
            </p>
            <p>
              Designing structures that stand the test of time, we are a
              construction company dedicated to turning your visions into
              reality. With a commitment to quality, innovation, and
              sustainability, we bring expertise and craftsmanship to every
              project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
