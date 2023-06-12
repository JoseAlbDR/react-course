import Friend from "./Friend";
import Button from "./Button";
import FriendForm from "./FriendForm";
import SplitForm from "./SplitForm";
import { useState } from "react";

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
    setToggleAddFriendForm(!toggleAddFriendForm);
    setToggleSplitForm(toggleSplitForm ? !toggleSplitForm : toggleSplitForm);
  }

  function handleToggleSplitForm(friend) {
    // Select button click
    selectedFriend === null && setToggleSplitForm(!toggleSplitForm);

    // Close button click
    selectedFriend === friend && setToggleSplitForm(!toggleSplitForm);

    // Show SplitForm and hide AddFriendForm
    setToggleAddFriendForm(
      toggleAddFriendForm ? !toggleAddFriendForm : toggleAddFriendForm
    );

    // Set friend Clicked
    setSelectedFriend(friend);
  }

  // CRUD
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
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
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/* Friend List */}
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              <Button
                onClick={() => handleRemoveFriend(friend.id, friend.name)}
                cssClass="remove"
              >
                ❌
              </Button>
              <Friend friend={friend} onClick={handleToggleSplitForm} />
              <Button
                onClick={() => handleToggleSplitForm(friend)}
                cssClass="button"
              >
                {toggleSplitForm && selectedFriend.name === friend.name
                  ? "Close"
                  : "Select"}
              </Button>
            </li>
          ))}
        </ul>
        {/* AddFriendForm */}
        {!toggleAddFriendForm ? (
          <Button onClick={handleToggleAddFriendForm} cssClass="button">
            Add friend
          </Button>
        ) : (
          <>
            <FriendForm
              onAddFriend={handleAddFriend}
              onToggleForm={handleToggleAddFriendForm}
            />
            <Button onClick={handleToggleAddFriendForm} cssClass="button">
              Close
            </Button>
          </>
        )}
      </div>
      {/* SplitForm */}
      <>
        {toggleSplitForm && (
          <SplitForm
            friend={selectedFriend}
            onUpdateFriend={handleUpdateFriend}
            onToggleForm={setToggleSplitForm}
          />
        )}
      </>
    </div>
  );
}

export default App;
