import romanatImage from '../assets/romanat_stock_photo.png';


export default function HomePage() {
    return (
<div className="container-fluid my-5 px-4 px-md-5">
  
        {/* Hero */}
        <section className="text-center py-5">
          <h1 className="display-4 fw-bold text-maroon mb-3">
            Welcome to Romanat Clinic
          </h1>
          <p className="lead mb-4">
            Compassionate family medicine for your health and wellness.
          </p>
        </section>
  
        {/* Services */}
        <section id="services" className="my-5">
          <h2 className="text-center mb-4 text-maroon">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="bi bi-heart-pulse-fill fs-1 text-maroon mb-3"></i>
                  <h5 className="card-title">General Checkups</h5>
                  <p className="card-text">
                    Routine health exams and preventive care for all ages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="bi bi-people-fill fs-1 text-maroon mb-3"></i>
                  <h5 className="card-title">Family Care</h5>
                  <p className="card-text">
                    Personalized care tailored for your entire family.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <i className="bi bi-thermometer-half fs-1 text-maroon mb-3"></i>
                  <h5 className="card-title">Acute Illness</h5>
                  <p className="card-text">
                    Diagnosis and treatment for common illnesses and injuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* About Us */}
        <section className="my-5 p-4 bg-light rounded">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={romanatImage}
              alt="Doctor with patient"
              className="img-fluid rounded shadow"
            />

            </div>
            <div className="col-md-6">
              <h2 className="text-maroon mb-3">About Romanat Clinic</h2>
              <p>
                At Romanat Clinic, we provide comprehensive family medicine with a personal touch.
                Our dedicated team is here to support your health journey at every stage.
              </p>
              <p>
                We enhance the health and well-being of all our patients by working collaboratively as a team to deliver the highest quality medical care.
                Our staff is compassionate, dedicated, and committed to meeting your health care needs.
                We invite you to visit us and choose Romanat Clinic as your trusted health care provider.
              </p>

             

<section className="my-5">
  <h2 className="text-maroon mb-4 text-center">Find Us Here</h2>
  <div className="ratio ratio-16x9 shadow rounded">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12279.561003440962!2d-104.87610781284178!3d39.697171499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d3900000001%3A0x2c3792a4001684e9!2sRomanat%20Clinic%2C%20Inc.!5e0!3m2!1sen!2sus!4v1751566898771!5m2!1sen!2sus"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Romanat Clinic Location"
    ></iframe>
  </div>
</section>


            </div>
            
          </div>
        </section>
  
        {/* Contact */}
        <section className="my-5 text-center">
          <h2 className="text-maroon mb-3">Get in Touch</h2>
          <p>
            Call us at <a href="tel:+13033641422" className="text-maroon">+1 (303) 364-1422</a><br/>
            Or visit us at 11275 E Mississippi Ave #2e2, Aurora, CO 80012
          </p>
        </section>
      </div>
    );
  }
  