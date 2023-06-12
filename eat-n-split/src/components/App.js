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

  // Toggle forms
  const [toggleAddFriendForm, setToggleAddFriendForm] = useState(false);
  const [toggleSplitForm, setToggleSplitForm] = useState(false);

  // Selected friend state to show in SplitForm
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggleAddFriendForm() {
    setSelectedFriend(null);

    // Show AddFriendForm and hide SplitForm
    setToggleAddFriendForm((show) => !show);
    setToggleSplitForm((show) => (show ? !show : show));
  }

  function handleToggleSplitForm(friend) {
    // Select button click
    if (selectedFriend === null) {
      setToggleSplitForm((show) => !show);
      setSelectedFriend(friend);
    }

    // Close button click
    if (selectedFriend === friend) {
      setToggleSplitForm((show) => !show);
      setSelectedFriend(null);
      // Select another friend while SplitForm is already opened
    } else {
      setSelectedFriend(friend);
    }
    // selectedFriend === friend && setToggleSplitForm(!toggleSplitForm);

    // Show SplitForm and hide AddFriendForm
    setToggleAddFriendForm((show) => (show ? !show : show));

    // Set friend Clicked
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
    setSelectedFriend(null);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === friendId
          ? { ...friend, balance: friend.balance + amount }
          : friend
      )
    );
    setToggleSplitForm(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* Friend List */}
        <FriendList
          friends={friends}
          onRemoveFriend={handleRemoveFriend}
          onToggleSplitForm={handleToggleSplitForm}
          toggleSplitForm={toggleSplitForm}
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
        {toggleSplitForm && (
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
