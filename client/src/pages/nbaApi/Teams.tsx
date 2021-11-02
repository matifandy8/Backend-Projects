import { useEffect, useState } from "react";
import { getTeams } from "../../helpers/ApiNba";
import TeamCard from "./TeamCard";
import "./Teams.css"
import Loading from "../../utils/loading";

const Teams: React.FC = () => {
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
    <div className="Teams">
      <h1>Teams</h1>
      {teams?.length === 0 ? (
        <div className="loading">
        <Loading/>
        </div>
      ) : (
        <div className="listTeams">
          {teams?.map((team: ITeam) => (
            <div key={team.id}>
              <TeamCard id={team.id} name={team.name} image={team.image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
