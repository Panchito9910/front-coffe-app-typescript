import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Header from "./header/Header";
const Dashboard = () => {
  return (
    <>
      <Header />
      <Container className="flex-grow-1 my-3">
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Dashboard;
