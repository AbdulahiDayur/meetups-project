import { useContext } from "react";

import FavortiesContext from "../store/favorites-context";
import MeetupList from "../components/Meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavortiesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Add some now!</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorties} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
