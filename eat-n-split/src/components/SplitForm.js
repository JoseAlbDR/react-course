import Button from "./Button";
export default function FriendForm() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text"></input>
      <label>🧍‍♂️ Your expense:</label>
      <input type="text"></input>
      <label>👩🏻‍🤝‍🧑🏻 X expense:</label>
      <input type="text"></input>
      <label>🤑 Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
