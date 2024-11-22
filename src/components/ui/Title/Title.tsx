import "./Title.css";

export interface TitileI {
  text?: string;
  title?: string;
  description?: string;
  style?:React.CSSProperties
}

const Title: React.FC<TitileI> = ({ text, title, description,style}: TitileI) => {
  return (
    <div className="title" style={style}>
      <h3>{text}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;
