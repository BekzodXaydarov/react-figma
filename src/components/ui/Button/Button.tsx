import "./Button.css";

export interface ButtonI {
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  img?: string;
}

const Button: React.FC<ButtonI> = ({
  text,
  className,
  style,
  img,
}: ButtonI) => {
  return (
    <button className={`${className ? className : "custom-btn"}`} style={style}>
      {text ? text : null}
      {img ? <img src={img} alt={img} /> : null}
    </button>
  );
};

export default Button;
