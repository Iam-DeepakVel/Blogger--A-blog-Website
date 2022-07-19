import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry!</h2>
            <p>The Page is not Found.</p>
            <Link to="/">Click here to go back to Homepage..</Link>
        </div>
     );
}
 
export default NotFound;