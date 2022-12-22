import { Card, CardBody, CardTitle, CardSubtitle, Table, Nav } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import admin from "../../api/admin";
import blockChainStorage from '../../utils/storage';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const [report, setReport] = useState([]);

  useEffect(() => {
    const money = async ()  =>{
      try{
        const data = await admin.getListStock()
        
        setReport(data.data.stocks);

      }
      catch (err) {
        window.location.reload();
      }
    }
    money()
  }, []);

  const find = report.findIndex(i => i.symbol == 'VND')
  report.splice(find,1)

  
  return (
        <Card>
      <CardBody>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
          <tr>
              <th className="p-2">ID cổ phiếu</th>
              <th>Tên cổ phiếu</th>
              <th>Biểu tượng</th>
            </tr>
          </thead>
          <tbody>
            {report ? report.map((tdata, index) => (
              <tr key={index} className="border-top cursor" onClick={()=>{
                navigate('/customstock')
                blockChainStorage.setNameBank(tdata.symbol)
                blockChainStorage.setNameStock(tdata.stock_id)
              }}>
                <td><h6 className="mb-0 pb-2 pt-2">{tdata.stock_id}</h6></td>
                <td>{tdata.name}</td>
                <td>{tdata.symbol}</td>
              </tr>
            )) : null}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Breadcrumbs;
