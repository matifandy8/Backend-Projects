import CardProject from "../CardProject";
import "./index.css";

const ListProjects: React.FC = () => {
  return (
    <div className="listProjects__container">
      <div className="listProjects">
        <CardProject
          id={1}
          name="youtubeDownloader"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzy8ntLNGmkJlhm8_-D0PT_5RvZwo8djiCow&usqp=CAU"
        />
        <CardProject
          id={2}
          name="Chat"
          image="https://tsh.io/wp-content/uploads/2020/04/Node-js-socket-io-tutorial-real-time-chat-app_.jpg"
        />
        <CardProject
          id={3}
          name="NbaApi"
          image="https://as01.epimg.net/baloncesto/imagenes/2021/08/04/nba/1628075599_241755_1628075753_noticia_normal_recorte1.jpg"
        />
        <CardProject
          id={4}
          name="Todo"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcaz8mmAdvophJJg-RMbSQ9qy98QC9FuQvw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default ListProjects;
