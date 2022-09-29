import $ from "./title.module.scss";

function HeaderTitle(props) {
  return (
    <div className={$.headerTitle}>
      <h1>travelly </h1>
      <h3>don’t destroy, explore</h3>
    </div>
  );
}

export default HeaderTitle;
