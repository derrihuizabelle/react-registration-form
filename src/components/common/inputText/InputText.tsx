interface InputTextProps {
  value: string;
  placeholder: string;
  label?: string;
  groupText?: string;
  eventHandler: (v: any) => void;
}

function InputText({
  value,
  placeholder,
  label,
  groupText,
  eventHandler,
}: InputTextProps) {
  return (
    <>
      <div className="input-group mb-3">
        {groupText && (
          <span className="input-group-text" id="basic-addon1">
            {groupText}
          </span>
        )}
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          aria-label={label}
          aria-describedby="basic-addon1"
          defaultValue={value}
          onChange={eventHandler}
        />
      </div>
    </>
  );
}

export default InputText;
