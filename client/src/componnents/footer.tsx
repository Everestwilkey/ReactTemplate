var logo = '../assets/image/logo.png';

import { navitems } from '../utils/data'; // Assuming you want to use the same nav items or modify as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/styles.scss'; // Ensure your styles.scss has footer styles if necessary

function Footer() {
  return (
    <footer className="bg-dark text-light ">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <a href="#">
              <img src={logo} alt="Logo" width="120" className="mb-3" />
            </a>
            <p>Leaving Businesses Better Than We Found Them</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {navitems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-light text-decoration-none">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              123 Street Name, City<br />
              Email: <a href="mailto:info@example.com" className="text-light text-decoration-none">info@example.com</a><br />
              Phone: +1 234 567 8900
            </address>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            {/* Add social media links here */}
            <a href="#" className="text-light me-2">Facebook</a>
            <a href="#" className="text-light me-2">Twitter</a>
            <a href="#" className="text-light">LinkedIn</a>
          </div>
        </div>
        <div className="border-top pt-3 mt-3">
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
