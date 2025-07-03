import React from 'react';
import haftuPicture from '../assets/haftu_picture.jpg';

export default function AboutPage() {
  return (
    <div className="container my-5 px-4 px-md-5">
    <h1 className="text-maroon mb-4 text-center">Meet Our Medical Staff</h1>

      {/* Staff Section */}
      <section className="row g-4 mb-5 justify-content-center">
        {/* Haftu Gebrehiwot */}
        <div className="col-md-4 text-center">
          <img
            src={haftuPicture}
            alt="Haftu Gebrehiwot, M.D."
            className="img-fluid rounded-circle mb-3 shadow"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h5>Haftu Gebrehiwot, M.D., FAAFP</h5>
          <p>Physician</p>
        </div>

        {/* Other Staff */}
        <div className="col-md-4">
          <h5>Medical Assistants:</h5>
          <ul className="list-unstyled">
            <li>Elssa Teame</li>
            <li>Nicole Ortiz</li>
          </ul>

          <h5>Practice Manager:</h5>
          <p>Belainesh Zedingel</p>

          <h5>Billing Questions:</h5>
          <p>
            Clinic Service Corporation<br />
            Phone: <a href="tel:3037552900">303-755-2900</a>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
<section className="my-5">
  <h2 className="text-maroon text-center mb-4">Why Choose Romanat Clinic</h2>
  <div className="row g-4">
    <div className="col-md-4 text-center">
      <i className="bi bi-heart-fill fs-1 text-maroon mb-2"></i>
      <h5>Compassionate Care</h5>
      <p>We treat every patient with kindness, dignity, and respect—like family.</p>
    </div>
    <div className="col-md-4 text-center">
      <i className="bi bi-person-check-fill fs-1 text-maroon mb-2"></i>
      <h5>Experienced Team</h5>
      <p>Led by Dr. Haftu Gebrehiwot, our skilled staff is dedicated to your health.</p>
    </div>
    <div className="col-md-4 text-center">
      <i className="bi bi-clock-history fs-1 text-maroon mb-2"></i>
      <h5>Convenient & Reliable</h5>
      <p>We offer accessible care with flexible scheduling and trusted service.</p>
    </div>
  </div>
</section>


      {/* Accepted Health Insurances */}
<section className="p-4 bg-light rounded shadow-sm my-5">
  <h2 className="text-maroon text-center mb-4">Accepted Health Insurances</h2>
  <div className="row row-cols-2 row-cols-md-3 g-3 justify-content-center">
  {[
    "Aetna",
    "Cigna",
    "Cofinity",
    "United Health Care",
    "PHCS / MultiPlan",
    "Blue Cross Blue Shield",
    "First Health Network",
    "Medicaid",
  ].map((provider) => (
    <div key={provider} className="col">
      <div className="card h-100 text-center border-0 shadow-sm p-3">
        <div className="card-body">
          <p className="card-text fw-semibold">{provider}</p>
        </div>
      </div>
    </div>
  ))}
</div>

</section>


    </div>
  );
}
