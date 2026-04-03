import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className="mb-3" >Skyline Heights Construction</h3>
            <div className="pe-5">
              <p>
                Our post-contruction services ensure your project is completed
                to the highest standards.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Skyline Heights Construction</h3>
            <ul>
              <li>
                <a href="">Specialty Construction</a>
              </li>
              <li>
                <a href="">Project Management</a>
              </li>
              <li>
                <a href="">Consulting Services</a>
              </li>
              <li>
                <a href="">Maintenance Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">(888-000-0000)</a>
              </li>
              <li>
                <a href="">info@example.com</a>
              </li>
              <p>123 Construction Street, Building City, BC 12345</p>
            </ul>
          </div>
          <hr />
          <div className="text-center pt-3">
            Copyright © 2026 Skyline Heights Construction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
