export default function Service({ tip, setTip, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(+e.target.value)}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
