export default function Button({ type, className, title }) {
  return (
    <button type={type} className={className}>
      <span>{title}</span>
    </button>
  );
}
