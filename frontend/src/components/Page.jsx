import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Pages = () => {
  const navigate = useNavigate();
  const [pages, setPage] = useState([]);

  useEffect(() => {
    const url = "localhost:3001/api/v1/page/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log(res.json());
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setPage(res))
      .catch(() => navigate("/"));
  }, [navigate]);

  const allPages = pages.map((page, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{page.words}</h5>
          <Link to={`/recipe/${page.id}`} className="btn custom-button">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes for every occasion</h1>
          <p className="lead text-muted">
            We've pulled together our most popular recipes, our latest
            additions, and our editor's picks, so there's sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/recipe" className="btn custom-button">
              Create New Recipe
            </Link>
          </div>
          <div className="row">{allPages}</div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};
export default Pages;
