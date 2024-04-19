import React, { useEffect } from "react";
import images from "../../assets/index";
function About(props) {
  const { setProgress } = props;
  

  useEffect(() => {
    //For Loader Start
    setProgress(100);
    //For Loader End

    //For Title Start
    document.title = 'DentalCare - About Us';  
    //For Title End

  }, [setProgress]);
  return (
    <>



      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="animate__animated animate__fadeInLeft position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="display-5 mb-0">
                  The World's Best Dental Clinic That You Can Trust
                </h1>
              </div>
              <h4 className="text-body fst-italic mb-4">
                Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no
                lorem sit clita duo justo magna dolore
              </h4>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    Award Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>24/7
                    Opened
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>Fair
                    Prices
                  </h5>
                </div>
              </div>
              <a
                href="/"
                className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                data-wow-delay="0.6s"
              >
                Make Appointment
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={images.about}
                  alt={images.about}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid position-relative pt-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ zIndex: 1 }}
      >
        <div className="container">
          <div className="bg-primary p-5">
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-3"
                  placeholder="Your Email"
                />
                <button className="btn btn-dark px-4">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
