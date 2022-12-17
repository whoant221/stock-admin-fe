import { Card, CardBody, CardTitle, CardSubtitle, Table, Nav } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import admin from "../../api/admin";


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

  return (
        <Card>
      <CardBody>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
          <tr>
              <th>Cổ phiếu</th>
              <th>Tham chiếu</th>
              <th>Trần</th>
              <th>Sàn</th>
              <th>Khớp lệnh</th>
              <th>Trạng thái</th>
              <th>Tổng KL</th>
              <th>Cao</th>
              <th>Thấp</th>
            </tr>
          </thead>

          <tbody>
            {report ? report.map((tdata, index) => (
              <tr key={index} className="border-top cursor" onClick={()=>{navigate('/customstock')}}>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <div className="ms-3">
                      <h6 className="mb-0">{tdata.symbol}</h6>
                      <span className="text-muted font-05 name">{tdata.name === 'undefined' ? <div>chưa có</div> : tdata.name }</span>
                    </div>
                  </div>
                </td>
                {/* <td>{tdata.project}</td>
                <td>{tdata.status}</td>
                <td>{tdata.weeks}</td>
                <td>{tdata.budget}</td>
                <td>{tdata.budget}</td>
                <td>{tdata.budget}</td>
                <td>{tdata.budget}</td> */}
              </tr>
            )) : null}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Breadcrumbs;
