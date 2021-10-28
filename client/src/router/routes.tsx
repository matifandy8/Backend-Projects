import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Todo from "../pages/todo";
import WebScraping from "../pages/webScraping";
import YoutubeDownloader from "../pages/youtubeDownloader";

export const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/youtubeDownloader" component={YoutubeDownloader} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/WebScraping" component={WebScraping} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};
