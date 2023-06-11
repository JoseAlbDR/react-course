import Button from "./Button";
import { useState } from "react";

export default function FriendForm({ friend }) {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);

  return (
    <form className="form-split-bill">
      <h2>split a bill with {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      ></input>
      <label>🧍‍♂️ Your expense:</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => setMyExpense(e.target.value)}
      ></input>
      <label>👩🏻‍🤝‍🧑🏻 {friend.name} expense:</label>
      <input
        type="number"
        value={friendExpense}
        onChange={(e) => setFriendExpense(e.target.value)}
      ></input>
      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
