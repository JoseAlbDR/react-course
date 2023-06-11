export default function Input({
  label,
  type,
  value,
  placeholder = null,
  fn = null,
  dis = false,
  req = false,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={fn ? (e) => fn(e.target.value) : null}
        disabled={dis}
        required={req}
        min={type === "number" ? 0 : null}
      />
    </>
  );
}
