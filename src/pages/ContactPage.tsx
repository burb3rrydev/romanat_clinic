import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(''); // Clear any existing message
  
    emailjs.send(
      'service_pxu0bbe',
      'template_2wepk6p',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'idwV1SF4wvm6egzPs'
    ).then((result) => {
      setStatus('✅ Your message was sent successfully. We’ll get back to you soon!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    }).catch((error) => {
      setStatus('❌ Failed to send your message. Please try again later.');
    });
  };
  

  return (
    <div className="bg-light py-5">
      <Container className="px-4 px-md-5">
        <h1 className="text-center text-maroon mb-4">Contact Us</h1>
        <p className="text-center mb-5 lead">
          We're here to answer your questions and provide quality care. Reach out today.
        </p>

        {/* Contact Info + Form */}
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <h4 className="text-maroon mb-3">Clinic Information</h4>
            <p><strong>Address:</strong><br />
              11275 E Mississippi Ave #2e2,<br />Aurora, CO 80012
            </p>
            <p><strong>Phone:</strong><br />
              <a href="tel:+13033641422" className="text-maroon">303-364-1422</a>
            </p>
            <p><strong>Hours:</strong><br />
              Monday – Friday: 9:00 AM – 5:30 PM
            </p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h4 className="text-maroon mb-3">Send Us a Message</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Type your message..." 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </Form.Group>

              <Button
                type="submit"
                className="btn btn-maroon w-100 py-2 shadow-sm"
                style={{
                    backgroundColor: '#800000',
                    border: 'none',
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                }}
                onMouseOver={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#a00000';
                    (e.target as HTMLButtonElement).style.transform = 'scale(1.02)';
                }}
                onMouseOut={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#800000';
                    (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                }}
                >
                Submit
                </Button>

            </Form>
            {status && <p className="mt-3">{status}</p>}
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-5">
          <h4 className="text-maroon mb-3 text-center">Find Us on the Map</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12279.561003440962!2d-104.87610781284178!3d39.697171499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d3900000001%3A0x2c3792a4001684e9!2sRomanat%20Clinic%2C%20Inc.!5e0!3m2!1sen!2sus!4v1751566898771!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Romanat Clinic Map"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}
