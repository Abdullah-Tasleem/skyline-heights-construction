import React, { useEffect, useState } from "react";
import ServiceImg from "../../../assets/images/construction1.jpg";
import { buildApiUrl, buildFileUrl } from "./http";
import { Link } from "react-router-dom";

export const LatestServices = () => {
  const [services, setServices] = useState([]);
  const fetchLatestServices = async () => {
    const res = await fetch(buildApiUrl("get-latest-services?limit=4"), {
      method: "GET",
    });
    const result = await res.json();
    console.log(result);
    setServices(result.data);
  };
  useEffect(() => {
    fetchLatestServices();
  }, []);
  return (
    <section className="section-3 bg-light py-5">
      <div className="container-fluid py-5">
        <div className="section-header text-center">
          <span>our services</span>
          <h2>our construction services</h2>
          <p>
            We offer a wide range of construction services to meet all your
            building needs.
          </p>
        </div>
        <div className="row pt-4">
          {services &&
            services.map((service) => {
              return (
                <div className="col-md-3 col-lg-3" key={service.id || service.title}>
                  <div className="item">
                    <div className="service-img">
                      <img src={`${buildFileUrl(`uploads/services/small/${service.image}`)}`} alt="" className="w-100" />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="service-content">
                        <p>{service.short_desc}</p>
                      </div>
                      <Link to={`/service/${service.id}`} className="btn btn-primary small">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-img">
                <img src={ServiceImg} alt="" className="w-100" />
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Specialty Construction</h3>
                </div>
                <div className="service-content">
                  <p>
                    Specialty construction services for unique and complex
                    projects.
                  </p>
                </div>
                <a href="#" className="btn btn-primary small">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-img">
                <img src={ServiceImg} alt="" className="w-100" />
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Specialty Construction</h3>
                </div>
                <div className="service-content">
                  <p>
                    Specialty construction services for unique and complex
                    projects.
                  </p>
                </div>
                <a href="#" className="btn btn-primary small">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="item">
              <div className="service-img">
                <img src={ServiceImg} alt="" className="w-100" />
              </div>
              <div className="service-body">
                <div className="service-title">
                  <h3>Specialty Construction</h3>
                </div>
                <div className="service-content">
                  <p>
                    Specialty construction services for unique and complex
                    projects.
                  </p>
                </div>
                <a href="#" className="btn btn-primary small">
                  Read More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
