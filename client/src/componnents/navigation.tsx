import logo from '../assets/image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navitems } from '../utils/data';
import '../scss/styles.scss';
function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="150"
              height="150"
              className="d-inline-block"
            />
          </a>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navitems.map((item) => (
                <li className="nav-item me-3 h5">
                  <a href={item.link} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Search form */}
            <form className="d-flex" role="search">
              <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
