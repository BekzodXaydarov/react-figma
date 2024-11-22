import "./Title.css";

export interface TitileI {
  text?: string;
  title?: string;
  description?: string;
}

const Title: React.FC<TitileI> = ({ text, title, description }: TitileI) => {
  return (
    <div className="title">
      <h3>{text}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Title;
