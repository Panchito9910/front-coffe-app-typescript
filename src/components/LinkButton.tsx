import { Link } from "react-router";
interface LinkButtonProps {
  text: string | null;
  className: string | null;
  url: string;
}
const LinkButton = ({ text, className, url }: LinkButtonProps) => {
  return (
    <Link className={`btn ${className}`} to={url}>
      {text}
    </Link>
  );
};

export default LinkButton;
