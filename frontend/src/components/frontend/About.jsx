import React from "react";
import { Header } from "./common/header";
import { Footer } from "./common/Footer";
import { About as AboutNew } from "./common/About";
import MemberImg from "../../assets/images/pexels-sindre-fs-1040880.jpg";
import { Hero } from "./common/Hero";
import { ShowTestimonial } from "./common/ShowTestimonial";
export const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality, Integrity, Value."
          heading="About Us"
          text="We offer a diverse array of construction services."
        />
        <AboutNew />

        {/* Our team */}
        
        <ShowTestimonial/>
      </main>
      <Footer />
    </>
  );
};
