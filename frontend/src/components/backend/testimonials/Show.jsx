import React, { useEffect, useState } from "react";
import { Header } from "../../frontend/common/header";
import { Sidebar } from "../../frontend/common/Sidebar";
import { Footer } from "../../frontend/common/Footer";
import { apiUrl, token, fileUrl } from "../../frontend/common/http";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Show = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await fetch(apiUrl + "testimonials", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    setTestimonials(result.data);
  };

  const deleteTestimonial = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      const res = await fetch(apiUrl + "testimonials/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status == true) {
        const updated = testimonials.filter((t) => t.id != id);
        setTestimonials(updated);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Testimonials</h4>
                    <Link
                      to="/admin/testimonials/create"
                      className="btn btn-primary"
                    >
                      Create
                    </Link>
                  </div>
                  <hr />
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Citation</th>
                        <th>Testimonial</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testimonials &&
                        testimonials.map((testimonial) => (
                          <tr key={`testimonial-${testimonial.id}`}>
                            <td>{testimonial.id}</td>
                            <td>
                              {testimonial.image ? (
                                <img
                                  src={
                                    fileUrl +
                                    "uploads/testimonials/small/" +
                                    testimonial.image
                                  }
                                  alt=""
                                  width={50}
                                  height={50}
                                  style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                  }}
                                />
                              ) : (
                                <span className="text-muted">No image</span>
                              )}
                            </td>
                            <td>{testimonial.citation}</td>
                            <td>
                              {testimonial.testimonial.length > 60
                                ? testimonial.testimonial.substring(0, 60) + "..."
                                : testimonial.testimonial}
                            </td>
                            <td>
                              {testimonial.status == 1 ? "Active" : "Block"}
                            </td>
                            <td>
                              <Link
                                to={`/admin/testimonials/edit/${testimonial.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                Edit
                              </Link>
                              <Link
                                to=""
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() =>
                                  deleteTestimonial(testimonial.id)
                                }
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};