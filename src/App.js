import { Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

const App = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profiles">Profile</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
    </main>
  );
};

export default App;
