export default function Input({
  label,
  type,
  value,
  fn,
  dis = false,
  req = false,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder="0"
        onChange={(e) => fn(+e.target.value)}
        disabled={dis}
      />
    </>
  );
}
