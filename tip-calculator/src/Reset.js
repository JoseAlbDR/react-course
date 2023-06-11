export default function Reset({ setBill, setMine, setFriend }) {
  function resetValues() {
    setBill(0);
    setMine(0);
    setFriend(0);
  }

  return <button onClick={resetValues}>Reset</button>;
}
