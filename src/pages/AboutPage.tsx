import React, { useState, useEffect } from 'react';
import haftuPicture from '../assets/haftu_picture.jpg';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container my-5 px-4 px-md-5">
      <h1 className="text-maroon mb-4 text-center">Meet Our Medical Staff</h1>

      {/* Haftu Gebrehiwot Section */}
      <section
        className="d-flex justify-content-center"
        style={{
          marginTop: '2rem',
          marginBottom: isMobile ? '1.5rem' : '3rem', // reduce mb on mobile
        }}
      >
        <div
          className="d-flex flex-column flex-md-row align-items-center text-center text-md-start w-100 px-3"
          style={{ maxWidth: 600 }}
        >
          <img
            src={haftuPicture}
            alt="Haftu Gebrehiwot, M.D."
            className="img-fluid rounded-circle shadow mb-3 mb-md-0"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              marginRight: '1.5rem',
            }}
          />
          <div>
            <h5 className="text-start text-md-left">Haftu Gebrehiwot, M.D., FAAFP</h5>
            <p className="fw-bold mb-1 text-start text-md-start">Physician</p>
            <p className="mb-0 text-start">
              Board Certified, American Board of Family Medicine<br />
              Civil Surgeon<br />
              Certified Medical Examiner
            </p>
          </div>
        </div>
      </section>

      {/* Other Staff */}
      <section className="mb-5">
        <div
          className="row justify-content-center gx-0 gx-md-5"
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <div className="col-12 col-md-auto mb-3 mb-md-0" style={{ textAlign: 'left' }}>
            <h5>Medical Assistants:</h5>
            <ul className="list-unstyled mb-0">
              <li className="fw-bold">Elssa Teame</li>
              <li className="fw-bold">Nicole Ortiz</li>
            </ul>
          </div>

          <div className="col-12 col-md-auto mb-3 mb-md-0" style={{ textAlign: 'left' }}>
            <h5>Practice Manager:</h5>
            <p className="mb-0 fw-bold">Belainesh Zedingel</p>
          </div>

          <div className="col-12 col-md-auto" style={{ textAlign: 'left' }}>
            <h5>Billing Questions:</h5>
            <p className="mb-0">
              Clinic Service Corporation
              <br />
              Phone: <a href="tel:3037552900">303-755-2900</a>
            </p>
          </div>
        </div>
      </section>







    </div>
  );
}
