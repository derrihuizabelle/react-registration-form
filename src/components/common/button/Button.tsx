interface ButtonProps {
  value: string;
  style?: string;
  eventHandler: (v: any) => void;
}

function Button({ value, style = 'btn-primary', eventHandler }: ButtonProps) {
  return (
    <>
      <button type="button" className={`btn ${style}`} onClick={eventHandler}>
        {value}
      </button>
    </>
  );
}

export default Button;
