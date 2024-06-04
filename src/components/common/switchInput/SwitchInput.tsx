interface SwitchInputProps {
  value: boolean;
  label: string;
  eventHandler: (v: any) => void;
}

function SwitchInput({ value, label, eventHandler }: SwitchInputProps) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          defaultChecked={value}
          onClick={eventHandler}
        />
        {label && (
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {label}
          </label>
        )}
      </div>
    </>
  );
}

export default SwitchInput;
