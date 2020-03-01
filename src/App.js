import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop/MenuTop";

//Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import Search from "./pages/search";

export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>

        <Content>
          <Switch>
            <Router path="/" exact={true}>
              <Home />
            </Router>
            <Router path="/new-movies" exact={true}>
              <NewMovies />
            </Router>
            <Router path="/popular" exact={true}>
              <Popular />
            </Router>
            <Router path="/movie/:id" exact={true}>
              <Movie />
            </Router>
            <Router path="/search" exact={true}>
              <Search />
            </Router>
            <Router path="*">
              <Error404 />
            </Router>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}
