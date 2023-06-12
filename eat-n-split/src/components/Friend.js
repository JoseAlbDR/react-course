import Button from "./Button";
export default function Friend({
  friend,
  onRemoveFriend,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <>
      <li className={selectedFriend === friend ? "selected" : ""}>
        <Button
          onClick={() => onRemoveFriend(friend.id, friend.name)}
          cssClass="remove"
        >
          ❌
        </Button>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance}€
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}€
          </p>
        )}
        <Button onClick={() => onSelectedFriend(friend)} cssClass="button">
          {selectedFriend?.name === friend.name ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}
