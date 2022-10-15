import $ from "./radiobutton.module.scss";

function Radiobutton(props) {
  let name = props.title;

  return (
    <div className={$.radiobuttons}>
      <legend>{name}</legend>
      <div className={$.radiobuttonsWrapper}>
        <label>
          <input type="radio" name={name} checked />
          <span className={$.radiobuttonsTile}>Yes</span>
        </label>
        <label>
          <input type="radio" name={name} />
          <span className={$.radiobuttonsTile}>No</span>
        </label>
      </div>
    </div>
  );
}

export default Radiobutton;
