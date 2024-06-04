interface CheckboxProps {
  value: boolean;
  label: string;
  eventHandler: (v: any) => void;
}

function Checkbox({ value, label, eventHandler }: CheckboxProps) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={value}
          id="flexCheckDefault"
          onClick={eventHandler}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {label}
        </label>
      </div>
    </>
  );
}

export default Checkbox;
