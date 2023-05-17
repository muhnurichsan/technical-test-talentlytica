/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange }) => {
  const handleKeyUp = (e: any) =>
    (e.target.value = e.target.value.match(/^(?:[1-9]|0[1-9]|10)$/));
  return (
    <input
      onKeyUp={handleKeyUp}
      type="number"
      onChange={onChange}
      className="border"
      required
      min={1}
      max={10}
    />
  );
};

export default Input;
