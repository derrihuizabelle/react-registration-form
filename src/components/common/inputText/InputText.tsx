interface InputTextProps {
  value: string;
  placeholder: string;
  type?: string;
  label?: string;
  groupText?: string;
  onChange: (value: string) => void;
}

function InputText({
  value,
  placeholder,
  type = 'text',
  label,
  groupText,
  onChange,
}: InputTextProps) {
  const componentId =  Math.floor(Math.random() * 100) + 1;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <>
      <div className="form-group mb-3">
        {groupText && (
          <span className="input-group-text" id={`basic-addon-${componentId}`}>
            {groupText}
          </span>
        )}
        {
          label && (
            <label htmlFor={`basic-input-${componentId}`} id={`basic-label-${componentId}`}>{label}</label>
          )
        }
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          aria-label={label}
          aria-describedby="basic-addon1"
          defaultValue={value}
          onChange={handleChange}
          id={`basic-input-${componentId}`}
        />
      </div>
    </>
  );
}

export default InputText;
