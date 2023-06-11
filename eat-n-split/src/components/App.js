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
  const [friends, setFriends] = useState(initialFriends);
  const [toggleAddFriendForm, setToggleAddFriendForm] = useState(false);
  const [toggleSplitForm, setToggleSplitForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  function handleToggleAddFriendForm() {
    setToggleAddFriendForm(!toggleAddFriendForm);
    setToggleSplitForm(toggleSplitForm ? !toggleSplitForm : toggleSplitForm);
  }

  function handleToggleSplitForm(friend) {
    setToggleSplitForm(!toggleSplitForm);
    setToggleAddFriendForm(
      toggleAddFriendForm ? !toggleAddFriendForm : toggleAddFriendForm
    );
    setSelectedFriend(friend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleUpdateFriend(friendId, amount) {
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
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              <Friend friend={friend} onClick={handleToggleSplitForm} />
              <Button onClick={() => handleToggleSplitForm(friend)}>
                {toggleSplitForm && selectedFriend.name === friend.name
                  ? "Close"
                  : "Select"}
              </Button>
            </li>
          ))}
        </ul>

        {!toggleAddFriendForm ? (
          <Button onClick={handleToggleAddFriendForm}>Add friend</Button>
        ) : (
          <>
            <FriendForm
              onAddFriend={handleAddFriend}
              onToggleForm={handleToggleAddFriendForm}
            />
            <Button onClick={handleToggleAddFriendForm}>Close</Button>
          </>
        )}
      </div>
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
