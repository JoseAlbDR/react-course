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

  function handleShowAddFriendForm() {
    setShowAddFriendForm(!showAddFriendForm);
  }

  function handleShowSplitForm() {
    setShowSplitForm(!showSplitForm);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              <Friend friend={friend} onClick={handleShowSplitForm} />
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
      <>{showSplitForm && <SplitForm />}</>
    </div>
  );
}

export default App;
