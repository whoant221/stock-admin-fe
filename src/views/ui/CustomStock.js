import { Card, Row, Col, CardTitle, CardBody, Table, Button
} from "reactstrap";
import admin from "../../api/admin";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blockChainStorage from "../../utils/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Badges = () => {
  const navigate = useNavigate();
  const [report, setReport] = useState([]);
  const symbol = blockChainStorage.getNameBank()
  const nameStock = blockChainStorage.getNameStock()

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
      try {
          const res = await admin.postEnable({
              name: report.floor_price ,
              symbol: symbol ,
              price: report.ref_price,
          } , nameStock);
          if (res.success === false) toast.error("Đường truyền bị ngắt ngoãng !");
          else {
              toast.success(`${res.data.message}`);
              navigate('/');
          }
      }
      catch (err) {
          toast.error(`${err.response.data.errorMessage}`);
      }
  }

  console.log(report.floor_price, symbol,report.ref_price );
  const Close = async () => {
    try {
      const res = await admin.postDisable({
          name: report.floor_price ,
          symbol: symbol ,
          price: report.ref_price,
      } , nameStock);
      if (res.success === false) toast.error("Đường truyền bị ngắt ngoãng !");
      else {
          toast.success(`${res.data.message}`);
          navigate('/');
      }
  }
  catch (err) {
      toast.error(`${err.response.data.errorMessage}`);
  }
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

              <Button className="btn mt-3 m-3" color="danger" onClick={Close}>
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
