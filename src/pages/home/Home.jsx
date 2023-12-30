import { Link } from "react-router-dom";
import "./Home.css";
import "../../index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="btn-hero-home" to="/vans">
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;
