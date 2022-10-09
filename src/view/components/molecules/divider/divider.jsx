import $ from "./divider.module.scss";

function Divider(props) {
  return (
    <div className={$.divider}>
      <span className={$.dividerIcon}></span>
    </div>
  );
}

export default Divider;
