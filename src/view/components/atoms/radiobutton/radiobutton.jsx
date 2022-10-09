import $ from "./radiobutton.module.scss";

function Radiobutton(props) {
  return (
    <div className={$.radiobuttons}>
      <legend>Legal Travelling</legend>
      <div className={$.radiobuttonsWrapper}>
        <label>
          <input type="radio" name="legaltravelling" checked />
          <span className={$.radiobuttonsTile}>Yes</span>
        </label>
        <label>
          <input type="radio" name="legaltravelling" />
          <span className={$.radiobuttonsTile}>No</span>
        </label>
      </div>
    </div>
  );
}

export default Radiobutton;
