import Friend from "./Friend";
import Button from "./Button";
import AddFriend from "./AddFriend";
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
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <Friend friend={friend} />
          </li>
        ))}
      </ul>

      {!showAddFriend ? (
        <Button onClick={handleShowAddFriend}>Add friend</Button>
      ) : (
        <>
          <AddFriend />
          <Button onClick={handleShowAddFriend}>Close</Button>
        </>
      )}
    </div>
  );
}

export default App;
