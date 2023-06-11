export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        min="0"
        placeholder={bill}
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}
