import { useEffect, useState } from "react";
import { getTeams } from "../../helpers/ApiNba";
import TeamCard from "./TeamCard";
import "./index.css"
import Loading from "../../utils/loading";

const NbaApi: React.FC = () => {
  const [teams, setTeams] = useState<ITeam[] | any>([]);
  useEffect(() => {
    fetchTeams();
  }, []);

  console.log(teams);

  const fetchTeams = (): void => {
    getTeams()
      .then((response) => setTeams(response.data))
      .catch((err: Error) => console.log(err));
  };

  return (
    <div className="NbaApi">
      <h1>Nba Api</h1>
      {teams?.length === 0 ? (
        <div className="loading">
        <Loading/>
        </div>
      ) : (
        <div className="listTeams">
          {teams?.map((team: ITeam) => (
            <TeamCard name={team.name} image={team.image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NbaApi;
