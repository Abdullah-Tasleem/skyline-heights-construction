import React, { useEffect, useState } from "react";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { apiUrl, fileUrl } from "./common/http";
import { Hero } from "./common/Hero";
import { Link, useParams } from "react-router-dom";

export const BlogDetail = () => {
  const params = useParams();

  const [article, setArticle] = useState(null);
  const [latestArticles, setLatestArticles] = useState([]);

  const fetchLatestArticles = async () => {
    try {
      const res = await fetch(`${apiUrl}get-latest-articles`);
      const data = await res.json();

      if (data.status) {
        setLatestArticles(data.data);
      } else {
        console.error(data.message);
        setArticle(null);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchArticle = async () => {
    try {
      const res = await fetch(`${apiUrl}get-article/${params.id}`);
      const data = await res.json();

      if (data.status) {
        setArticle(data.data);
      } else {
        console.error(data.message);
        setArticle(null);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchArticle();
    fetchLatestArticles();
  }, [params.id]);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality, Integrity, Value."
          heading="Blog & News"
          text=""
        />

        <section className="section-11">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-8">
                <h2>{article?.title}</h2>

                <div>
                  by <strong>{article?.author}</strong> on {article?.created_at}
                </div>

                {article?.image && (
                  <div className="pe-md-5 pb-3">
                    <img
                      src={`${fileUrl}uploads/articles/large/${article.image}`}
                      alt={article.title}
                      className="w-100"
                    />
                  </div>
                )}

                <div dangerouslySetInnerHTML={{ __html: article?.content }} />
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-5 py-4">
                    <h3 className="mt-2 mb-3">Latest blogs</h3>
                    {latestArticles &&
                      latestArticles.map((article) => {
                        return (
                          <div
                            className="d-flex border-bottom mb-3 pb-2"
                            key={`latest-article-${article.id}`}
                          >
                            <div className="pe-3 pb-2">
                              <Link
                                to={`/blog/${article.id}`}
                              >
                                <img
                                  width={75}
                                  src={`${fileUrl}uploads/articles/small/${article.image}`}
                                  alt={article.title}
                                />
                              </Link>
                            </div>
                            <Link to={`/blog/${article.id}`} className="title">
                              {article.title}
                            </Link>
                            <hr />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
