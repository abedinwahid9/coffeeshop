import { Link } from "react-router-dom";

export default function SocialContact({ icon, pathName, ...rest }) {
  return (
    <div {...rest}>
      <Link to={pathName} target="_blank">
        <i className={icon}></i>
      </Link>
    </div>
  );
}
