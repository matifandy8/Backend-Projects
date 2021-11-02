import "./index.css"
import Loading from "../../utils/loading";
import { Link } from "react-router-dom";

const NbaApi: React.FC = () => {
  
  return (
    <div className="NbaApi">
      <h1>Nba Api</h1>
      <Link to="NbaApi/teams">
         <a>Get All Teams</a>
      </Link>
    </div>
  );
};

export default NbaApi;
