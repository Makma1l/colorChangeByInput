
const MyInput = ({ color, onColorChange }) => {
  const handleChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={color}
      onChange={handleChange}
      placeholder="Enter a color"
    />
  );
};

export default MyInput;
