import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { useState, useEffect } from 'react';
import Header from "./Header";
import blockChainStorage from '../utils/storage';

const FullLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!blockChainStorage.getInfoClient()) navigate('/login')
  }, [navigate])

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
