import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div>
        <h2 className="text-danger shadow-none">404 Page not found</h2>
        <p>
          Go back to <Link to={'/'} className="btn bg-body-secondary">Homepage</Link>
        </p>
      </div>
    );
}
 
export default NotFound;