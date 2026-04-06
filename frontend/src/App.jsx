import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/Home";
import "./assets/css/style.scss";
import { About } from "./components/frontend/About";
import { Services } from "./components/frontend/Services";
import { Projects } from "./components/frontend/Projects";
import { Blogs } from "./components/frontend/Blogs";
import { ContactUs } from "./components/frontend/ContactUs";
import { Login } from "./components/backend/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "./components/backend/Dashboard";
import { RequireAuth } from "./components/frontend/common/RequireAuth";
import { Show as ShowServices } from "./components/backend/services/Show";
import { Create as CreateService } from "./components/backend/services/Create";
import { Edit as EditService } from "./components/backend/services/Edit";
import { Show as ShowProjects } from "./components/backend/projects/Show";
import { Create as CreateProject } from "./components/backend/projects/Create";
import { Edit as EditProject } from "./components/backend/projects/Edit";
import { Show as ArticleShow } from "./components/backend/articles/Show";
import { Create as ArticleCreate } from "./components/backend/articles/Create";
import { Edit as ArticleEdit } from "./components/backend/articles/Edit";
import { Show as TestimonialShow } from "./components/backend/testimonials/Show";
import { Create as TestimonialCreate } from "./components/backend/testimonials/Create";
import { Edit as TestimonialEdit } from "./components/backend/testimonials/Edit";
import { Show as MemberShow }     from "./components/backend/members/Show";
import { Create as MemberCreate } from "./components/backend/members/Create";
import { Edit as MemberEdit }     from "./components/backend/members/Edit";
import { ServiceDetail } from "./components/frontend/ServiceDetail";
import { ProjectDetail } from "./components/frontend/ProjectDetail";
import { BlogDetail } from "./components/frontend/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateService />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/edit/:id"
            element={
              <RequireAuth>
                <EditService />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <RequireAuth>
                <ShowProjects />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/create"
            element={
              <RequireAuth>
                <CreateProject />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects/edit/:id"
            element={
              <RequireAuth>
                <EditProject />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <RequireAuth>
                <ArticleShow />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles/create"
            element={
              <RequireAuth>
                <ArticleCreate />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <RequireAuth>
                <ArticleEdit />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonials"
            element={
              <RequireAuth>
                <TestimonialShow />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonials/create"
            element={
              <RequireAuth>
                <TestimonialCreate />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/testimonials/edit/:id"
            element={
              <RequireAuth>
                <TestimonialEdit />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/members"
            element={
              <RequireAuth>
                <MemberShow />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/members/create"
            element={
              <RequireAuth>
                <MemberCreate />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/members/edit/:id"
            element={
              <RequireAuth>
                <MemberEdit />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
