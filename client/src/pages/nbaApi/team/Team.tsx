import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeam } from "../../../helpers/ApiNba";

const Team:React.FC = () => {
    const { id }:any = useParams();

    const [team, setTeam] = useState<ITeam | any>([]);
    useEffect(() => {
      fetchTeam();
    }, []);
    console.log(team);
    console.log(id);

  
    const fetchTeam = (): void => {
      getTeam(id)
        .then((response) => setTeam(response.data))
        .catch((err: Error) => console.log(err));
    };
  
    return (
        <div>
            <h2>{team.name}</h2> 
            <img src={team.image} alt={team.name} /> 
            // more info abbout the team like stats ,players.
        </div>
    )
}

export default Team
