export default function Pay({ bill, myTip, friendTip }) {
  const mine = (bill * myTip) / 100;
  const friend = (bill * friendTip) / 100;
  const average = (mine + friend) / 2;
  const total = bill + average;
  return (
    <div>
      {bill > 0 && (
        <p>
          You pay ${total} (${bill} + ${average} tip)
        </p>
      )}
    </div>
  );
}
