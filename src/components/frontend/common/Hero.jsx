import React from "react";

export const Hero = ({preHeading,heading,text}) => {
  return (
    <section className="section-7">
      <div className="hero d-flex align-items-center">
        <div className="container w-75">
          <div className="text-left">
            <span>{preHeading}</span>
            <h1>{heading}</h1>
            <p>{text}</p>
            <div className="mt-3">
              <a href="/contact" className="btn btn-primary large">Get Started</a>
              <a href="/projects" className="btn btn-secondary ms-2 large">View Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
