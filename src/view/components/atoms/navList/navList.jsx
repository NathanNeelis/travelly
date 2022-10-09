import $ from "./navList.module.scss";

function NavList(props) {
  return (
    <div className={$.navList}>
      <ul>
        <li className={$.discover}>Discover</li>
        <li className={$.destinations}>Destinations</li>
        <li className={$.contact}>Contact</li>
      </ul>
    </div>
  );
}

export default NavList;
