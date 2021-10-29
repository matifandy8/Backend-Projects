import "./TeamCard.css";

const TeamCard = ({ name, image }: ITeam) => {
  return (
    <div className="TeamCard">
      <p>{name}</p>
      <img className="TeamCard__image" src={image} alt={name} />
    </div>
  );
};

export default TeamCard;
