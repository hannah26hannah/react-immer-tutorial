import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

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
          <li>
            <Link to="/history">History Sample</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />

        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨.
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
