export default function Friend({ friend }) {
  return (
    <>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <p className={friend.balance > 0 ? "green" : "red"}>
        {friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}`
          : `You owes ${friend.name} ${Math.abs(friend.balance)}€`}
      </p>
    </>
  );
}
