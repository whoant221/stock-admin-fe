import { Card, Row, Col, CardTitle, CardBody, Table, Button
} from "reactstrap";
import admin from "../../api/admin";
import { useEffect, useState } from 'react';
import blockChainStorage from "../../utils/storage";


const Badges = () => {

  const [report, setReport] = useState([]);
  const symbol = blockChainStorage.getNameBank()

  useEffect(() => {
    const money = async ()  =>{
      try{
        const data = await admin.getDetailStock(`${symbol}`)
        setReport(data.data);
      }
      catch (err) {
        window.location.reload();
      }
    }
    money()
  }, []);

  const Open = async () => {

  }
  


  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            
            <Row>
              <Col xs="6" sm="2">
                Cập nhật cổ phiếu
              </Col>
            </Row>

          </CardTitle>
          
          <CardBody>
            <Row className="mt-3">

              <Col xs="12" sm="12">
              <Table className="no-wrap mt-3 align-middle" responsive borderless >
                <thead>
                <tr>
                    <th>Cổ phiếu</th>
                    <th>Giá trần</th>
                    <th>Giá sàn</th>
                    <th>Giá tham chiếu</th>
                    <th>Cao</th>
                    <th>Thấp</th>
                    <th>Khối lượng</th>
                  </tr>
                </thead>

                <tbody>

                    <tr className="border-top cursor" >
                      <td><h6 className="mb-0 pt-2 pb-2">{symbol}</h6></td>
                      <td>{parseFloat(report.floor_price).toFixed(2) === 'NaN'? '0' : parseFloat(report.floor_price).toFixed(2) }</td>
                      <td>{parseFloat(report.ceil_price).toFixed(2) === 'NaN'? '0' : parseFloat(report.ceil_price).toFixed(2)}</td>
                      <td>{parseFloat(report.ref_price).toFixed(2) === 'NaN'? '0' : parseFloat(report.ref_price).toFixed(2)}</td>
                      <td>{report.highest_price}</td>
                      <td>{report.lowest_price === '99999999' ? '0' : report.lowest_price}</td>
                      <td>{report.total_volume}</td>
                    </tr>

                </tbody>
              </Table>

              <Button className="btn mt-3 m-3" color="danger" >
                Đóng cổ phiếu
              </Button>
              <Button className="btn mt-3 m-3" color="success" onClick={Open}>
                Mở cổ phiếu
              </Button>

              </Col>



            </Row>
        </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Badges;
