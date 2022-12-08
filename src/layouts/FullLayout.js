import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        <div className="contentArea">
          <Header />
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
