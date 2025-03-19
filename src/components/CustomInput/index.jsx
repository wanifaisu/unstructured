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
}) => {
  return (
    <div className="input-group">
      <label>
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'input-error' : ''}
      />
      {error && <span className="error-text">{label} is required</span>}
    </div>
  );
};

export default CustomInput;
