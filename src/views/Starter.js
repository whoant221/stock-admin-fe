import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import StockTable from '../views/ui/StockTable'
import ProjectTable from '../views/ui/ProjectTable'
import TopCards from "../components/dashboard/TopCards";
import { useEffect, useState } from 'react';
import admin from "../api/admin";

const Starter = () => {

  const [report, setReport] = useState();

  useEffect(() => {
    const money = async ()  =>{
        try{
            const data = await admin.getReport()
            setReport(data.data);
        }
        catch (err) {
            alert(err);
        }
    }
    money()
  }, []);
  console.log(report);

  return (
    <div>
      {report ?
      <Row>
        <Col sm="12" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col>
          <Col sm="12" lg="12">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Tổng khối lượng mua"
              earning={report.total_bid_volume}
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="12" lg="12">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Tổng khối lượng bán"
              earning={report.total_ask_volume}
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="12" lg="12">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Tổng Khối lượng giao dịch"
              earning={report.orders_count}
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="12" lg="12">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Số lượng người dùng"
              earning={report.users_count}
              icon="bi bi-bag"
            />
          </Col>
        </Col>
      </Row>
      : null }
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <StockTable />
        </Col>
        <Col lg="12">
          <ProjectTable />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
