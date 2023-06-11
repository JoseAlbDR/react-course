export default function Button({ children, onClick, cssClass }) {
  return (
    <button onClick={onClick} className={cssClass}>
      {children}
    </button>
  );
}
