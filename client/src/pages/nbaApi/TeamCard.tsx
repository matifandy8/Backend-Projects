import { Link } from "react-router-dom";
import "./TeamCard.css";

const TeamCard = ({id, name, image }: ITeam) => {
  return (
    <div key={id} className="TeamCard">
      <Link to={`NbaApi/teams/${id}`} style={{ textDecoration: 'none' }}>
      <p>{name}</p>
      <img className="TeamCard__image" src={image} alt={name} />
      </Link>
    </div>
  );
};

export default TeamCard;
