import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer-white text-center py-4 mt-5">
      <Container>
        <small>&copy; {new Date().getFullYear()} Romanat Clinic. All rights reserved.</small>
      </Container>
    </footer>
  );
}
