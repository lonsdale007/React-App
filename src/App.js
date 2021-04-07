import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Profile from "./Components/Profile";
import Home from "./Components/Home";

function App() {
  return (
      <Router>
          <Route exact path={"/"}>
              <Home/>
          </Route>

          <Route path={"/profile"}>
                  <Profile/>
          </Route>
      </Router>
  );
}

export default App;
