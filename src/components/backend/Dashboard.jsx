import React from "react";
import { Header } from "../frontend/common/Header";
import { Footer } from "../frontend/common/Footer";
import { Sidebar } from "../frontend/common/Sidebar";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
            <Sidebar/>
            </div>
            <div className="col-md-9 dashboard">
              <div className="card shadow border-0">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h4>Welcome to Admin Console</h4>
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
