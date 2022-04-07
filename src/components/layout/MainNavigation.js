import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
            <li>
              <Link to="/new-meetup">New Meetups</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;