import $ from "./sectionHeader.module.scss";
import Title from "../../atoms/title/title";

function SectionHeader(props) {
  let section = props.section;
  let subtitle = props.subtitle;

  return (
    <div className={$.sectionHeader}>
      <Title section={section} subtitle={subtitle} />
    </div>
  );
}

export default SectionHeader;
