import React, { useContext } from "react";
import { AuthContext } from "../../backend/context/Auth";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const {logout} = useContext(AuthContext)
  return (
    <>
      <div className="card shadow border-0">
        <div className="card-body p-4 sidebar">
          <h4>Sidebar</h4>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/services">Services</Link>
            </li>
            <li>
              <a href="/admin/projects">Projects</a>
            </li>
            <li>
              <a href="/admin/articles">Articles</a>
            </li>
            <li>
              <a href="/admin/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/admin/members">Members</a>
            </li>
            <li>
              <button onClick={logout} className="btn btn-primary mt-4">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
