import Button from "./Button";
import { useState } from "react";

export default function FriendForm({ onAddFriend, onShowForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name) return;

    const randomImg = `https://i.pravatar.cc/48?u=${Math.floor(
      Math.random() * 1000000 + 1
    )}`;

    const newFriend = {
      name,
      image: image ? image : randomImg,
      balance: 0,
      id: Date.now(),
    };
    onAddFriend(newFriend);
    onShowForm();
    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Name</label>
      <input
        type="text"
        placeholder="Friend Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required={true}
      ></input>
      <label>🌇Image URL</label>
      <input
        type="text"
        placeholder="Random if empty"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}
