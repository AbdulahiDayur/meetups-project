import { useHistory } from "react-router-dom";

import NewMeetUpForm from "../components/Meetups/NewMeetUpForm";
function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "http://react-getting-started-ae010-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
      }
    )
      .then((response) => {
        console.log("Successfully added data to Firebase!");
      })
      .then(() => {
        history.replace("/");
      })
      .catch((error) => {
        console.log("This is error", error);
      });
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
