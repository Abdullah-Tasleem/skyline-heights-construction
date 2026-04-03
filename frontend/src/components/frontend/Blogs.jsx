import React, { useEffect, useState } from "react";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Hero } from "./common/Hero";
import BlogImg from "../../assets/images/construction3.jpg";
import { apiUrl, fileUrl } from "./common/http";
import { Link } from "react-router-dom";

export const Blogs = () => {
  const [articles, setArticles] = useState([]);

  const fetchLatestArticles = async () => {
    try {
      const res = await fetch(apiUrl + "get-latest-articles", {
        method: "GET",
      });

      const result = await res.json();

      if (result.status === true) {
        setArticles(result.data);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality, Integrity, Value."
          heading="Blogs"
          text="We offer a diverse array of construction services."
        />
        {/* Blog */}
        <section className="section-6 bg-light py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Blog and News</span>
              <h2>Article and Blog posts</h2>
              <p>
                Hear from our satisfied clients about their experience working
                with us.
              </p>
            </div>
            <div className="row pt-3">
              {articles.length > 0 &&
                articles.map((article) => (
                  <div className="col-md-4" key={article.id}>
                    <div className="card shadow border-0 mb-3">
                      <div className="card-img-top">
                        <img
                          src={`${fileUrl}uploads/articles/small/${article.image}`}
                          alt=""
                          className="w-100"
                        />
                      </div>

                      <div className="card-body p-4">
                        <div className="mb-3">
                          <Link to={`/blog/${article.id}`} className="title">
                            {article.title}
                          </Link>
                        </div>

                        <Link to={`/blog/${article.id}`} className="btn btn-primary small">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
