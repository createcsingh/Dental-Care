import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light py-5 wow fadeInUp"
        data-wow-delay="0.3s"
        style={{ marginTop: "-75px" }}
      >
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="/">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Home
                </a>
                <a className="text-light mb-2" href="/about">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  About Us
                </a>
                <a className="text-light mb-2" href="/service">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2" href="/">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Latest Blog
                </a>
                <a className="text-light" href="/contact">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Popular Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="/">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Home
                </a>
                <a className="text-light mb-2" href="/about">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  About Us
                </a>
                <a className="text-light mb-2" href="/service">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2" href="/">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Latest Blog
                </a>
                <a className="text-light" href="/contact">
                  <AiOutlineArrowRight className="text-primary me-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">
                <BiMap className="text-primary me-2" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FaEnvelopeOpen className="text-primary me-2" />
                info@example.com
              </p>
              <p className="mb-0">
                <FaPhoneAlt className="text-primary me-2" />
                +012 345 67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="/"
                >
                  <FaTwitter className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="/"
                >
                  <FaFacebookF className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="/"
                >
                  <FaLinkedinIn className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href="/"
                >
                  <FaInstagram className="fab fa-twitter fw-normal" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-light py-4"
        style={{ background: "#051225" }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <Link className="text-white border-bottom" to="/">
                  DentCare
                </Link>
                . All Rights Reserved.
              </p>
            </div>
            {/* <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by{" "}
                <a className="text-white border-bottom" href="/">
                  HTML Codex
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
