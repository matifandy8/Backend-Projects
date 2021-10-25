import { Link } from "react-router-dom"
import "./index.css"

interface Props {
  id: number;
  name: string;
  image: string;
}

const CardProject: React.FC<Props> = ({ id,  name, image }) => {
    return (
        <Link to={name} style={{ textDecoration: 'none' }}>
        <div key={id} className="cardProject">
            <img className="cardProject_img" src={image} alt={name} />
            <p>{name}</p>
        </div>
        </Link>
    )
}

export default CardProject
