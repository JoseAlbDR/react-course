import Button from "./Button";
import Friend from "./Friend";
export default function FriendList({
  friends,
  onRemoveFriend,
  onToggleSplitForm,
  toggleSplitForm,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <Button
            onClick={() => onRemoveFriend(friend.id, friend.name)}
            cssClass="remove"
          >
            ❌
          </Button>
          <Friend friend={friend} onClick={onToggleSplitForm} />
          <Button onClick={() => onToggleSplitForm(friend)} cssClass="button">
            {toggleSplitForm && selectedFriend.name === friend.name
              ? "Close"
              : "Select"}
          </Button>
        </li>
      ))}
    </ul>
  );
}
