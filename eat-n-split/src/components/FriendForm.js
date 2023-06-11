import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function FriendForm({ onAddFriend, onToggleForm }) {
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
    onToggleForm();
    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <Input
        label={"👫Name"}
        type="text"
        placeholder="Friend Name"
        value={name}
        fn={setName}
        req={true}
      />
      <Input
        label="🌇Image URL"
        type="text"
        placeholder="Random if empty"
        value={image}
        fn={setImage}
      />
      <Button>Add</Button>
    </form>
  );
}
