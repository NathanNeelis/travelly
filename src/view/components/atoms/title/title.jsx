import $ from "./title.module.scss";

function Title(props) {
  return (
    <div className={$.title}>
      <h4>{props.section}</h4>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

export default Title;
