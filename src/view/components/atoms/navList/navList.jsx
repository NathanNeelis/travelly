import $ from "./navList.module.scss";

function NavList(props) {
  return (
    <div className={$.navList}>
      <ul>
        <a href="#discover">
          {" "}
          <li className={$.discover}>Discover</li>
        </a>
        <li className={$.destinations}>Destinations</li>
        <li className={$.contact}>Contact</li>
      </ul>
    </div>
  );
}

export default NavList;
