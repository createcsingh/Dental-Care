import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import Appointment from "./components/shared/Appointment";
import Loader from "./components/shared/Loader";
import { Link } from "react-router-dom";
import PageScrollProgressBar from "react-page-scroll-progress-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const [offerPopup, setOfferPopup] = useState("");

  useEffect(() => {
    //For Offer Popup Start
    setTimeout(function () {
      setOfferPopup("show d-block");
    }, 10000);
    //For Offer Popup End
  }, [setProgress]);

  //For Close Offer Popup Start
  const closeOfferPopup = () => {
    setOfferPopup("");
  };

  const appointmentLink = () => {
    setOfferPopup("");
  };
  //For Close Offer Popup End

  const AppRef = useRef(null); 
  return (
    <>
      <Loader setProgress={setProgress} progress={progress} />
      <PageScrollProgressBar container={AppRef.current} color="#0d6efd" height="6px" />
      <BrowserRouter>
        <Header email="info@example.com" />
        {/*  Offer Popup Modal Start */}
        <div
          className={"modal fade " + offerPopup}
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="container py-5">
                <div className="row justify-content-center">
                  <div className="wow zoomIn" data-wow-delay="0.6s">
                    <div className="offer-text text-center rounded p-5">
                      <h1 className="display-5 text-white">
                        Save 30% On Your First Dental Checkup
                      </h1>
                      <p className="text-white mb-4">
                        Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor
                        ea et dolore et at sea ea at dolor justo ipsum duo rebum
                        sea. Eos vero eos vero ea et dolore eirmod diam duo
                        lorem magna sit dolore sed et.
                      </p>
                        <Link
                          to="/appointment"
                        >
                      <button
                        type="button"
                        className="btn btn-dark py-3 px-5 me-3"
                        onClick={appointmentLink}
                        data-bs-dismiss="modal"
                      >
                        Appointment
                      </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={closeOfferPopup}
                        data-bs-dismiss="modal"
                        style={{height: "57px", width: "110px"}}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Offer Popup Modal End */}
        <Routes>
          <Route
            exact
            index
            path="/"
            element={<Home setProgress={setProgress} />}
          />
          <Route
            exact
            path="/about"
            element={<About setProgress={setProgress} />}
          />
          <Route
            exact
            path="/service"
            element={<Service setProgress={setProgress} />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact setProgress={setProgress} />}
          />
          <Route
            exact
            path="/appointment"
            element={<Appointment setProgress={setProgress} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
