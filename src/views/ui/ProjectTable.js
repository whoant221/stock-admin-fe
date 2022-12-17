import { Card, CardBody, Table } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import admin from "../../api/admin";
import moment from 'moment';

const ProjectTables = () => {

const [report, setReport] = useState([]);

const navigate = useNavigate();
  useEffect(() => {
    const money = async ()  =>{
      try{
        const data = await admin.getListUser()
        setReport(data.data.users);
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
              <th>User</th>
              <th>Họ và tên</th>
              <th>Số điện thoại</th>
              <th>CMND</th>
              <th>Ngày Sinh</th>
            </tr>
          </thead>

          <tbody>
            {report ? report.map((tdata, index) => (
              <tr key={index} className="border-top cursor" onClick={()=>{navigate('/customuser')}}>
                <td>
                  <div className="d-flex p-2">
                    <div className="ms-3">
                      <h6 className="mb-0">{tdata.username}</h6>
                      <span className="text-muted font-05 name">{tdata.address}</span>
                    </div>
                  </div>
                </td>
                <td>{tdata.name}</td>
                <td>{tdata.phone_number === 'undefined' ? <div>Chưa có</div> : tdata.phone_number}</td>
                <td>{tdata.identification_number.trim() === 'undefined' ? <div>Chưa có</div> : tdata.identification_number.trim()}</td>
                <td>{ moment(tdata.birthday).utc().format('DD/MM/YYYY')}</td>
              </tr>
            )) : null}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProjectTables;
