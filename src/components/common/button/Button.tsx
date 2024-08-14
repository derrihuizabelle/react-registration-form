interface ButtonProps {
  value: string;
  style?: string;
  onClick: (v: any) => void;
}

function Button({ value, style = 'btn-primary', onClick }: ButtonProps) {
  return (
    <>
      <button type="button" className={`btn ${style}`} onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Button;
