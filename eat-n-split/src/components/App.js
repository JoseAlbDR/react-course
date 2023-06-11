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
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [showSplitForm, setShowSplitForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  function handleShowAddFriendForm() {
    setShowAddFriendForm(!showAddFriendForm);
  }

  function handleShowSplitForm(friend) {
    setShowSplitForm(!showSplitForm);
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
              <Friend friend={friend} onClick={handleShowSplitForm} />
              <Button onClick={() => handleShowSplitForm(friend)}>
                {showSplitForm && selectedFriend.name === friend.name
                  ? "Close"
                  : "Select"}
              </Button>
            </li>
          ))}
        </ul>

        {!showAddFriendForm ? (
          <Button onClick={handleShowAddFriendForm}>Add friend</Button>
        ) : (
          <>
            <FriendForm
              onAddFriend={handleAddFriend}
              onShowForm={handleShowAddFriendForm}
            />
            <Button onClick={handleShowAddFriendForm}>Close</Button>
          </>
        )}
      </div>
      <>
        {showSplitForm && (
          <SplitForm
            friend={selectedFriend}
            onSplitForm={handleUpdateFriend}
            onShowForm={setShowSplitForm}
          />
        )}
      </>
    </div>
  );
}

export default App;
