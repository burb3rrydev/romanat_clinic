import React from 'react';
import { Container } from 'react-bootstrap';

export default function ServicesPage() {
  const services = [
    {
      title: "Urgent Care Services",
      description: "Timely treatment for sudden illnesses and non-life-threatening injuries without an appointment."
    },
    {
      title: "Exams for Children, Adults & Elderly",
      description: "Routine wellness exams tailored for every age group to monitor and maintain overall health."
    },
    {
      title: "Women's Health",
      description: "Comprehensive care including pap smears, breast exams, and reproductive health consultations."
    },
    {
      title: "Immunizations",
      description: "Stay protected with routine and travel-related vaccinations for children and adults."
    },
    {
      title: "Immigration Exams (USCIS)",
      description: "Certified medical exams required for U.S. immigration and adjustment of status applications."
    },
    {
      title: "Health Check-Ups & Pre-Employment",
      description: "Medical evaluations required for new job positions or general health screening."
    },
    {
      title: "CDL / DOT Exams",
      description: "Certified Department of Transportation exams for commercial driver’s license holders."
    },
    {
      title: "School & Sports Physicals",
      description: "Ensure children and teens are healthy and ready to safely participate in academic and sports programs."
    },
    {
      title: "Sports & Work Injuries",
      description: "Diagnosis and treatment plans for sprains, strains, and other occupational or athletic injuries."
    },
    {
      title: "Travel Medicine",
      description: "Consultations and vaccinations tailored to your destination to keep you safe while abroad."
    },
    {
      title: "Adoption Exams",
      description: "Health screenings required for child adoption processes to ensure a healthy transition."
    },
    {
      title: "Motor Vehicle Accident Care",
      description: "Evaluation and treatment for injuries resulting from car accidents including follow-up care."
    },
    {
      title: "Routine Lab Services",
      description: "On-site blood work, urinalysis, and other diagnostics for quick and accurate results."
    }
  ];

  return (
    <div className="bg-light py-5">
      <Container className="px-4 px-md-5">
        <h1 className="text-center text-maroon mb-4">Our Medical Services</h1>
        <p className="lead text-center mb-5">
          Compassionate, comprehensive care to meet your health needs at every stage of life.
        </p>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service, index) => (
            <div key={index} className="col">
              <div className="card h-100 border-0 shadow-sm service-card">
                <div className="card-body">
                  <h5 className="card-title text-maroon">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
