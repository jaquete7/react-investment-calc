export default function UserInput({ label, id, value, onChange }) {
  const handleInputChange = (e) => {
    //This value is the new value of the event after changing the text
    onChange(id, e.target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" value={value} onChange={handleInputChange} />
    </div>
  );
}
