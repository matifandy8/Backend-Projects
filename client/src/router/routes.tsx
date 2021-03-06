import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Todo from "../pages/todo";
import YoutubeDownloader from "../pages/youtubeDownloader";
import NbaApi from "../pages/nbaApi";
import Teams from "../pages/nbaApi/Teams";
import LiveChat from "../pages/chat";
import Team from "../pages/nbaApi/team/Team";

export const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/youtubeDownloader" component={YoutubeDownloader} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/Chat" component={LiveChat} />
        <Route exact path="/NbaApi" component={NbaApi} />
        <Route exact path="/NbaApi/teams" component={Teams} />
        <Route exact path="/NbaApi/teams/:id" component={Team} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </Layout>
  );
};
