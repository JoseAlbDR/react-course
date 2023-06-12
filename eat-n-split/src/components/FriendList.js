import Friend from "./Friend";
export default function FriendList({
  friends,
  onRemoveFriend,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          onRemoveFriend={onRemoveFriend}
        />
      ))}
    </ul>
  );
}
