import React, { useEffect, useState } from "react";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Hero } from "./common/Hero";
import ConstructionImg from "../../assets/images/construction2.jpg";
import { apiUrl, fileUrl } from "./common/http";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const res = await fetch(apiUrl + "get-projects", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setProjects(result.data);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality, Integrity, Value."
          heading="Our Projects"
          text="We offer a diverse array of construction services."
        />
        {/* Our Projects */}
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>our projects</span>
              <h2>Discover our diverse range of project</h2>
              <p>
                We offer a wide range of construction services to meet all your
                building needs.
              </p>
            </div>
            <div className="row pt-4">
              {projects &&
                projects.map((project) => {
                  return (
                    <div className="col-md-4 col-lg-4">
                      <div className="item">
                        <div className="service-img">
                          <img
                            src={`${fileUrl}uploads/projects/small/${project.image}`}
                            alt=""
                            className="w-100"
                          />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>{project.title}</h3>
                          </div>
                          <div className="service-content">
                            <p>{project.short_desc}</p>
                          </div>
                          <Link to={`/projects/${project.id}`} className="btn btn-primary small">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
