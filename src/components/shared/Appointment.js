import React, { useEffect } from "react";

function Appointment(props) {
  const { setProgress } = props;

  useEffect(() => {
    document.title = "DentalCare - Set your Appointment";
    setProgress(100);
  }, [setProgress]);

  const handleAppointment= ()=> {
    alert("asd")
  }
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn animate__animated animate__fadeInLeft">
              Appointment
            </h1>
            <a href="/" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="/Appointment" className="h4 text-white">
              Appointment
            </a>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="display-5 text-white mb-4">
                  We Are A Certified and Award Winning Dental Clinic You Can
                  Trust
                </h1>
                <p className="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 className="text-white mb-4">Make Appointment</h1>
                <form onSubmit={handleAppointment}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        defaultValue={0}
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                      >
                        <option value="0">Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        defaultValue={0}
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                      >
                        <option value="0">Select Doctor</option>
                        <option value="1">Doctor 1</option>
                        <option value="2">Doctor 2</option>
                        <option value="3">Doctor 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Date"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="time1"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Time"
                          data-target="#time1"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="button">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </form>
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

export default Appointment;
