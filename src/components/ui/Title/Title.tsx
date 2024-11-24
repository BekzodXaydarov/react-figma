import "./Title.css";

export interface TitileI {
  text?: string;
  title?: string;
  description?: string;
  style?:React.CSSProperties
}

const Title: React.FC<TitileI> = ({ text, title, description,style}: TitileI) => {
  return (
    <section className="title" style={style} data-aos="fade-up">
      <h3>{text}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Title;
