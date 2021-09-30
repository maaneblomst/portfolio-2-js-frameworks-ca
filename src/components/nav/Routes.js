import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";
import Admin from "../../pages/admin/Admin";
import Favorites from "../../pages/favorites/Favorites";
import PostDetails from "../posts/PostDetails";
import Navigation from "../nav/Nav";
import Container from "react-bootstrap/Container";

function Routes() {
  return (
    <Router>
      <Navigation />
      <Container fluid>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/posts/:id">
            <PostDetails />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;
