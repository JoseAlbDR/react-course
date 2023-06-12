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
        <Friend
          key={friend.id}
          friend={friend}
          onToggleSplitForm={onToggleSplitForm}
          toggleSplitForm={toggleSplitForm}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
