import { Card, CardBody, CardTitle, CardSubtitle, Table, Nav } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "ACB",
    adress: "Ngân hàng thương mại cổ phần đầu tư và phát triển việt nam",
    project: "234",
    status: "234",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "BID",
    adress: "Tập đoàn xăng dầu Việt Nam",
    project: "4567",
    status: "890",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "BVH",
    adress: "Tập đoàn Bảo Việt",
    project: "8907",
    status: "234",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "CTG",
    adress: "Công ty cổ phần tập đoàn Hòa Phát",
    project: "809",
    status: "3245",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "FPT",
    adress: "Công ty cổ phần PFT",
    project: "54363",
    status: "098",
    weeks: "35",
    budget: "95K",
  },
];

const Breadcrumbs = () => {
  const navigate = useNavigate();
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
              <th>Tổng KL</th>
              <th>Cao</th>
              <th>Thấp</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((tdata, index) => (
              <tr key={index} className="border-top cursor" onClick={()=>{navigate('/customstock')}}>
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
                <td>{tdata.status}</td>
                <td>{tdata.weeks}</td>
                <td>{tdata.budget}</td>
                <td>{tdata.budget}</td>
                <td>{tdata.budget}</td>
                <td>{tdata.budget}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Breadcrumbs;
