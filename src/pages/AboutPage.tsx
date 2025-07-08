//import { useState, useEffect } from 'react';
import haftuPicture from '../assets/haftu_picture.jpg';
import elssaPicture from '../assets/elssa_picture.jpg';
import nicolePicture from '../assets/nicole_picture.jpg';
//import belaineshPicture from '../assets/belainesh_picture.jpg';

export default function AboutPage() {
  /*const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);*/

  return (
    <div className="container my-5 px-4 px-md-5">
      <h1 className="text-maroon mb-5 text-center">Meet Our Medical Staff</h1>

      {/* Haftu Section */}
      <section className="d-flex justify-content-center mb-5">
        <div
          className="d-flex flex-column flex-md-row align-items-center text-center text-md-start w-100 px-3"
          style={{ maxWidth: 700 }}
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
            <h5 className="text-start">Haftu Gebrehiwot, M.D., FAAFP</h5>
            <p className="fw-bold mb-1 text-start">Physician</p>
            <p className="mb-0 text-start">
              Board Certified, American Board of Family Medicine<br />
              Civil Surgeon &
              Certified Medical Examiner
            </p>
          </div>
        </div>
      </section>

      {/* Other Staff Grid */}
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {[
          {
            name: 'Elssa Teame',
            role: 'Medical Assistant',
            image: elssaPicture,
          },
          {
            name: 'Nicole Ortiz',
            role: 'Medical Assistant',
            image: nicolePicture,
          },
         /* {
            name: 'Belainesh Zedingel',
            role: 'Practice Manager',
            image: belaineshPicture,
          },*/
        ].map((staff, index) => (
          <div key={index} className="col">
            <div className="card h-100 border-0 shadow text-center">
              <img
                src={staff.image}
                alt={staff.name}
                className="card-img-top rounded-circle mx-auto mt-4"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '3px solid #800000',
                }}
              />
              <div className="card-body">
                <h5 className="card-title mb-1">{staff.name}</h5>
                <p className="card-text text-muted">{staff.role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Billing Section */}
      <section className="text-center mt-5">
        <h5>Billing Questions</h5>
        <p className="mb-0">
          Clinic Service Corporation<br />
          Phone: <a href="tel:3037552900">303-755-2900</a>
        </p>
      </section>
    </div>
  );
}
