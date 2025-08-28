import { useAuth } from "../../../context/AuthProvider";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../../components/LinkButton";
const Header = () => {
  const { isAuth, logout } = useAuth();
  return (
    <>
      <Navbar className="py-3">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to={"/"}>
              Coffe App
            </Link>
          </Navbar.Brand>
          <div style={{ display: "flex", gap: 10 }}>
            {isAuth ? (
              <>
                <LinkButton
                  className={"btn-primary"}
                  text={"Products"}
                  url="/dashboard/products"
                />
                <Button variant="danger" onClick={logout}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </Button>
              </>
            ) : (
              <Button variant="primary">Login</Button>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
