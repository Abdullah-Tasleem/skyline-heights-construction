import React, { useEffect, useState } from "react";
import { buildApiUrl, buildFileUrl } from "./http";
import { Link } from "react-router-dom";

export const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchLatestArticles = async () => {
    try {
      const res = await fetch(buildApiUrl("get-latest-articles?limit=3"), {
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
    <section className="section-6 bg-light py-5">
      <div className="container">
        <div className="section-header text-center">
          <span>Blog and News</span>
          <h2>Article and Blog posts</h2>
        </div>

        <div className="row pt-3">
          {articles.length > 0 &&
            articles.map((article) => (
              <div className="col-md-4" key={article.id}>
                <div className="card shadow border-0 mb-3">
                  <div className="card-img-top">
                    <img
                      src={`${buildFileUrl(`uploads/articles/small/${article.image}`)}`}
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
  );
};