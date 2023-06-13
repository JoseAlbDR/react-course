import Button from "./Button";
import FriendForm from "./FriendForm";
import SplitForm from "./SplitForm";
import { useState } from "react";
import FriendList from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  // Friends CRUD state
  const [friends, setFriends] = useState(initialFriends);

  // Toggle form
  const [toggleAddFriendForm, setToggleAddFriendForm] = useState(false);

  // Selected friend state to show in SplitForm
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggleAddFriendForm() {
    // Show AddFriendForm and hide SplitForm
    setToggleAddFriendForm((show) => !show);

    // Set selectedFriedn to null to hide SplitForm
    setSelectedFriend(null);
  }

  function handleSelectedFriend(friend) {
    // Hide FriendForm
    setToggleAddFriendForm(false);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    // selectedFriend === friend
    //   ? setSelectedFriend(null)
    //   : setSelectedFriend(friend);
  }
  // CRUD
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setToggleAddFriendForm(false);
  }

  function handleRemoveFriend(id, name) {
    window.confirm(`Are you sure you want to remove ${name}?`) &&
      setFriends((friends) => friends.filter((friend) => friend.id !== id));
  }

  function handleUpdateFriend(friendId, amount) {
    console.log(friendId);
    console.log(amount);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === friendId
          ? { ...friend, balance: friend.balance + amount }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* Friend List */}
        <FriendList
          friends={friends}
          onRemoveFriend={handleRemoveFriend}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {/* FriendForm */}
        {toggleAddFriendForm && <FriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleToggleAddFriendForm} cssClass="button">
          {!toggleAddFriendForm ? "Add friend" : "Close"}
        </Button>
      </div>
      {/* SplitForm */}
      <>
        {selectedFriend && (
          <SplitForm
            friend={selectedFriend}
            onUpdateFriend={handleUpdateFriend}
          />
        )}
      </>
    </div>
  );
}

export default App;
