import React from "react";
import { FaTooth, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import Menu from "../../menu";
import { Outlet, Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "animate.css";

function Header(props) {
  const { email } = props;

  return (
    <>
      <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <small className="py-2">
                <BsClock className="text-primary me-2" />
                Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed
              </small>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
              <div className="me-3 pe-3 border-end py-2">
                <p className="m-0">
                  <FaEnvelopeOpen className="me-2" />
                  {email}
                </p>
              </div>
              <div className="py-2">
                <p className="m-0">
                  <FaPhoneAlt className="me-2" />
                  +012 345 6789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0 text-primary animate__animated animate__shakeY">
            <FaTooth className="m-2" />
            DentCare
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {Menu.map((menu, index) =>
              menu.subMenu ? (
                <div className="nav-item dropdown" key={index}>
                  <NavLink
                    to={menu.location}
                    className={menu.class}
                    data-bs-toggle="dropdown"
                  >
                    {menu.title}
                  </NavLink>
                  <div className="dropdown-menu m-0">
                    {menu.subMenu.map((subMenu, subIndex) => {
                      return (
                        <Link
                          to={subMenu.location}
                          className={subMenu.class}
                          key={subIndex}
                        >
                          {subMenu.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <NavLink to={menu.location} className={menu.class} key={index}>
                  {menu.title}
                </NavLink>
              )
            )}
            <NavDropdown title="Pages" id="services-dropdown">
              <NavDropdown.Item>
                <NavLink to="/service">Service 1</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item to="/service">Service 2</NavDropdown.Item>
            </NavDropdown>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
          <Link to="/Appointment" className="btn btn-primary py-2 px-4 ms-3">
            Appointment
          </Link>
        </div>
      </nav>
      <Outlet />
      <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(9, 30, 62, .7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
