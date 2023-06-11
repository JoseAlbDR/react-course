import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function FriendForm({ friend, onSplitForm, onShowForm }) {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [whoPays, setWhoPays] = useState("You");

  const friendExpense = +billValue - +myExpense;
  const amount =
    whoPays === "You" ? +billValue - +myExpense : +friendExpense - +billValue;

  function handleSplitForm(event) {
    event.preventDefault();
    if (!billValue) return;
    onSplitForm(friend.id, amount);
    onShowForm(false);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitForm}>
      <h2>split a bill with {friend.name}</h2>
      <Input
        label="💰 Bill value"
        type="number"
        value={billValue}
        fn={setBillValue}
      />
      <Input
        label="🧍‍♂️ Your expense:"
        type="number"
        value={myExpense}
        fn={setMyExpense}
      />
      <Input
        label={`👩🏻‍🤝‍🧑🏻 ${friend.name} expense:`}
        type="number"
        value={friendExpense}
        dis={true}
      />
      <label>🤑 Who is paying the bill?</label>
      <select onChange={(e) => setWhoPays(e.target.value)}>
        <option value="You">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
