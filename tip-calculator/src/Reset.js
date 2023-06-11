export default function Reset({ onSetBill, onSetMine, onSetFriend }) {
  function resetValues() {
    onSetBill(0);
    onSetMine(0);
    onSetFriend(0);
  }

  return <button onClick={resetValues}>Reset</button>;
}
