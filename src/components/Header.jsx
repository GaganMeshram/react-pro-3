import '../css/header.css'

const link ='#'
const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href={link}>
          Your Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href={link}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={link}>
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={link}>
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Header;