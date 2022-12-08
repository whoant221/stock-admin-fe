import { Card, CardBody, Table } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Phúc Thanh",
    adress: "144A Chi Lăng p12 Thành Phố Vũng Tàu",
    project: "0998352428",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Văn Tuân",
    adress: "144A Chi Lăng p12 Thành Phố Vũng Tàu",
    project: "0962534231",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Thái Tuấn",
    adress: "144A Chi Lăng p12 Thành Phố Vũng Tàu",
    project: "0693627593",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Huy Bùi",
    adress: "144A Chi Lăng p12 Thành Phố Vũng Tàu",
    project: "0382649362",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Khoa",
    adress: "144A Chi Lăng p12 Thành Phố Vũng Tàu",
    project: "0338091539",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
const navigate = useNavigate();
  return (
    <Card>
      <CardBody>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>User</th>
              <th>Số điện thoại</th>
              <th>Trạng thái</th>
              <th>Lệnh Bán</th>
              <th>Lệnh Mua</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index} className="border-top cursor" onClick={()=>{navigate('/customuser')}}>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={tdata.avatar}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">{tdata.name}</h6>
                      <span className="text-muted font-05 name">{tdata.adress}</span>
                    </div>
                  </div>
                </td>
                <td>{tdata.project}</td>
                <td>
                  {tdata.status === "pending" ? (
                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                  ) : tdata.status === "holt" ? (
                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                  ) : (
                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                  )}
                </td>
                <td>{tdata.weeks}</td>
                <td>{tdata.budget}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProjectTables;
