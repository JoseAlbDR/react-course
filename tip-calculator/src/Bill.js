export default function Bill({ bill, setBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="number"
        min="0"
        placeholder={bill}
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
    </div>
  );
}
