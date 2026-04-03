import React, { useEffect, useState } from "react";
import { Header } from "./common/header";
import { Footer } from "./common/Footer";
import { Hero } from "./common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "./common/http";
import { ShowTestimonial } from "./common/ShowTestimonial";

export const ProjectDetail = () => {
  const params = useParams();

  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);

  // fetch all projects (sidebar)
  const fetchProjects = async () => {
    const res = await fetch(`${apiUrl}get-projects`, {
      method: "GET",
    });

    const result = await res.json();

    if (result.status) {
      setProjects(result.data);
    }
  };

  // fetch single project
  const fetchProject = async () => {
    const res = await fetch(`${apiUrl}get-project/${params.id}`, {
      method: "GET",
    });

    const result = await res.json();

    if (result.status) {
      setProject(result.data);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  return (
    <>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value."
        heading={project?.title || ""}
        text={project?.short_desc || ""}
      />

      <section className="section-10">
        <div className="container py-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-4">
              <div className="card shadow border-0 sidebar">
                <div className="card-body px-4 py-4">
                  <h3 className="mt-2 mb-3">Insights</h3>

                  <ul>
                    {project?.location && (
                      <li className="mb-2">
                        <span className="text-body-secondary">Location</span>
                        <p>{project.location}</p>
                      </li>
                    )}
                    {project?.construction_type && (
                      <li className="mb-2">
                        <span className="text-body-secondary">
                          Construction Type
                        </span>
                        <p>{project.construction_type}</p>
                      </li>
                    )}
                    {project?.sector && (
                      <li className="mb-2">
                        <span className="text-body-secondary">Sector</span>
                        <p>{project.sector}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-md-8">
              {project && (
                <>
                  <img
                    src={`${fileUrl}uploads/projects/large/${project.image}`}
                    alt={project.title}
                    className="w-100"
                  />

                  <h3 className="py-3">{project.title}</h3>

                  <div dangerouslySetInnerHTML={{ __html: project.content }} />

                  <p>{project.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section-11 bg-light py-5">
        <ShowTestimonial />
      </section>

      <Footer />
    </>
  );
};
