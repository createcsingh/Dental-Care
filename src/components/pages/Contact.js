import React, { useEffect, useState } from "react";
import "animate.css";
import { BsCircle } from "react-icons/bs";
import { Spin } from "antd";

function Contact(props) {
  const { setProgress } = props;

  const [spinner, setspinner] = useState(
    <Spin size="large" style={{ marginTop: "160px", marginLeft: "187px" }} />
  );

  useEffect(() => {
    //For Loader Start
    setProgress(100);
    //For Loader End

    //For Title Start
    document.title = "DentalCare - Contact Us";
    //For Title End

    //For Spinner Start
    setTimeout(() => {
      setspinner(null);
    }, 7000);
    //For Spinner End
  }, [setProgress]);

  const [nameVal, setNameVal] = useState("");
  const nameChange = (e) => {
    setNameVal(e.target.value);
  };

  const [emailVal, setEmailVal] = useState("");
  const emailChange = (e) => {
    setEmailVal(e.target.value);
  };

  const [subjectVal, setSubjectVal] = useState("");
  const subjectChange = (e) => {
    setSubjectVal(e.target.value);
  };

  const [msgVal, setMsgVal] = useState();
  const msgChange = (e) => {
    setMsgVal(e.target.value);
  };

  const contactSub = (event) => {
    setNameVal(event.target.value);
    setEmailVal(event.target.value);
    setSubjectVal(event.target.value);
    setMsgVal(event.target.value);

    const formData = {
      name: { nameVal },
      email: { emailVal },
      subject: { subjectVal },
      msg: { msgVal },
    };

    fetch("http://localhost:4000/contact-form/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
    });
  };

  return (
    <>
      {/*  Contact Page Start */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn animate__animated animate__fadeInLeft">
              Contact Us
            </h1>
            <a href="/" className="h4 text-white">
              Home
            </a>
            <BsCircle className="px-2" />
            <a href="/" className="h4 text-white">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-4 col-lg-6 wow slideInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-light rounded h-100 p-5">
                <div className="section-title">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Contact Us
                  </h5>
                  <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Our Office</h5>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Email Us</h5>
                    <span>info@example.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Call Us</h5>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow slideInUp"
              data-wow-delay="0.3s"
            >
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      value={nameVal}
                      onChange={nameChange}
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      value={emailVal}
                      onChange={emailChange}
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Subject"
                      value={subjectVal}
                      onChange={subjectChange}
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0 bg-light px-4 py-3"
                      rows="5"
                      placeholder="Message"
                      value={msgVal}
                      onChange={msgChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="button"
                      onClick={contactSub}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-xl-4 col-lg-12 wow slideInUp"
              data-wow-delay="0.6s"
            >
              {spinner !== null ? (
                spinner
              ) : (
                <iframe
                  className="position-relative rounded w-100 h-100"
                  title="iframeTitle"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ minHeight: "400px", border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*  Contact Page End */}
    </>
  );
}

export default Contact;
