interface CheckboxProps {
  value: boolean;
  label: string;
  onCheck: (v: any) => void;
}

function Checkbox({ value, label, onCheck }: CheckboxProps) {
  const componentId =  Math.floor(Math.random() * 100) + 1;
  const handleCheck = (event: any) => {
    const inputValue = event.target.checked;
    onCheck(inputValue);
  };

  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={value}
          id={`basic-checkbox-${componentId}`}
          onClick={handleCheck}
        />
        <label className="form-check-label" htmlFor={`basic-checkbox-${componentId}`}>
          {label}
        </label>
      </div>
    </>
  );
}

export default Checkbox;
