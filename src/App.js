import { Router } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/Newmeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Router path="/">
        <AllMeetupsPage />
      </Router>
      <Router path="/new-meetup">
        <NewMeetupPage />
      </Router>
      <Router path="/favorites">
        <FavoritesPage />
      </Router>
    </div>
  );
}

export default App;
