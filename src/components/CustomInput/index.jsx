import { useState } from 'react';
import './custominput.css';

const CustomInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  error,
  onlyFourDigits = false,
}) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleInput = (e) => {
    let inputValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (inputValue.length > 4) {
      inputValue = inputValue.slice(0, 4); // Restrict to 4 digits
      setShowPopover(true); // Show popover if input exceeds 4 digits
      setTimeout(() => setShowPopover(false), 2000); // Hide popover after 2 sec
    } else {
      setShowPopover(false);
    }
    onChange({ target: { name, value: inputValue } });
  };

  return (
    <div className="input-group">
      <label>
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="input-wrapper">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onlyFourDigits ? handleInput : onChange}
          className={error ? 'input-error' : ''}
        />
        {showPopover && <span className="popover">You can only enter 4 digits</span>}
      </div>
      {error && <span className="error-text">{label} is required</span>}
    </div>
  );
};

export default CustomInput;
