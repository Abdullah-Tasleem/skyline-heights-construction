import React, { useEffect, useState } from "react";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Hero } from "./common/Hero";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "./common/http";
import { ShowTestimonial } from "./common/ShowTestimonial";

export const ServiceDetail = () => {
  const params = useParams();

  const [service, setService] = useState([]);
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await fetch(`${apiUrl}get-services`, {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
  };

  const fetchService = async () => {
    const res = await fetch(`${apiUrl}get-service/${params.id}`, {
      method: "GET",
    });

    const result = await res.json();

    if (result.status) {
      setService(result.data);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchService();
  }, [params.id]);

  return (
    <>
      <Header />

      <Hero
        preHeading="Quality, Integrity, Value."
        heading={service.title}
        text={service.short_desc || ""}
      />
      <section className="section-10">
        <div className="container py-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <div className="card shadow border-0 sidebar">
                <div className="card-body px-4 py-4">
                  <h3 className="mt-2 mb-3">Our Services</h3>
                  <ul>
                    {services &&
                      services.map((service) => {
                        return (
                          <li key={`service-${service.id}`}>
                            <Link to={`/services/${service.id}`}>
                              {service.title}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-md-9">
              <div>
                <img
                  src={`${fileUrl}uploads/services/large/${service.image}`}
                  alt={service.title}
                  className="w-100"
                />
              </div>

              <h3 className="py-3">{service.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
              {/* Description */}
              <p>{service.description}</p>
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
